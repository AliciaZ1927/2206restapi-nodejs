import { miU } from '../../models/rwd/miU.js'




export const postLogin = (req, res) => {
    const { Account, Password } = req.body;
    miU.findOne({ where: { Account }})
        .then((miU) => {
            console.log('miU', miU);
            if (!miU) {
                console.log("login failed");
            } else {
                console.log("login success");
            }
            
                
        })
        .catch((err) => {
            console.log('login error:', err);
        });
}

export const postSignUp = (req, res) => {
    res.json({ok: "Signup"});
}

