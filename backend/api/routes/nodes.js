import { timeStamp } from 'console';
import express from 'express';

const router = express.Router();
let nodes = [];

const nameList = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa",
            "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon",
            "Phi", "Chi", "Psi", "Omega"];

function initializeNodes() {
    for (let i = 1; i <= 50; i++) {
        nodes.push({
            id: `node-${i.toString().padStart(2, '0')}`,
            name: "Worker Node " + nameList[Math.floor((i - 1) % nameList.length)],
            status: ["online", "offline", "maintenance"][Math.floor(Math.random() * 3)],
            cpuUsage: Math.floor(Math.random() * 100),
            memoryUsage: parseFloat((Math.random() * 16).toFixed(2)),
            timeStamp: new Date().toISOString()
        });
    }
}


initializeNodes();  

router.get('/nodes', (req, res, next) => {
    res.send(nodes);
});

export default router;

