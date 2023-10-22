const userController = require("../Controllers/user.controller");

module.exports = function (io) {
    // io ~~~
    io.on("connection", async (socket) => {
        console.log("클라이언트 서버에 접속되었습니다.", socket.id);

    socket.on("login", async (userName, cb) => {
        // 유저 정보를 저장
        try {
            const user = await userController.saveUser(userName, socket.id);
            cb({ ok: true, data:user })
        } catch(error) {
            cb({ ok: false, error: error.message });
        }
    })

    socket.on("disconnect", () => {
        console.log("연결 종료했습니다...");
    })
    });
};