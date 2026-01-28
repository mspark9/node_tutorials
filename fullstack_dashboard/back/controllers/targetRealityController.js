const db = require('../db/db')

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
exports.getTargetReality = async (request, response) => {
    try {
        const result = await db.pool.query("SELECT * FROM target_reality")
        return response.status(200).json(result.rows)
    } catch (error) {
        return response.status(500).json({ message: `Get customers Error: ${error}` })
    }
}