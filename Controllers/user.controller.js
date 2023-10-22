const User = require("../Models/user");
const userController = {};

userController.saveUser = async (userName, sid) => {
    // 이미 있는 유저인지 확인
    let user = await User.findOne({ name: userName });

    // 없다면 새로운 유저정보 만들기
    if (!user) {
        user = new User({
            name: userName,
            token: sid,
            online: true,
        });
    }

    // 이미 있는 유저라면 연결정보 token 값만 바꿔주기
    user.token = sid;
    user.online = true;

    await user.save();
    console.log(user);
    return user;
};

module.exports = userController;
