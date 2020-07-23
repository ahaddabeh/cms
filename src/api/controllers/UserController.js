const BaseController = require("./BaseController");
const jwt = require("jsonwebtoken")
class UserController extends BaseController {
    constructor(models, model) {
        super(models, model);
        this.models = models;
        this.model = models[model];
    }

    loginUser = async (req, res) => {
        // don't have a email or password... don't go any further
        if (!req.body.email || !req.body.password) {
            res
                .status(400)
                .send("You need a email and password");
            return;
        }

        const user = await this.model.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })

        // user not found, send 401
        if (!user) {
            res
                .status(401)
                .send("User not found");
            return;
        }

        // if we made it this far it means we found the user, sign the token
        const token = jwt.sign({
            sub: user.id,
            algorithm: "RS256"
        }, "mysupersecretkey", { expiresIn: 60 });

        res
            .status(200)
            .send({ access_token: token });
    }
}

module.exports = UserController;