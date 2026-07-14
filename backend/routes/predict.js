const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const router = express.Router();

router.post("/predict", (req, res) => {

    console.log("Received Data:");
    console.log(req.body);

    const python = spawn("python", [
        path.join(__dirname, "../python/predict.py"),
        JSON.stringify(req.body)
    ]);

    let result = "";
    let error = "";

    python.stdout.on("data", (data) => {
        result += data.toString();
    });

    python.stderr.on("data", (data) => {
        error += data.toString();
        console.error("Python Error:");
        console.error(data.toString());
    });

    python.on("close", (code) => {

        console.log("Exit Code:", code);
        console.log("Python Output:", result);

        if (code !== 0) {
            return res.status(500).json({
                error
            });
        }

        try {
            res.json(JSON.parse(result));
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: err.message,
                result
            });
        }

    });

});

module.exports = router;