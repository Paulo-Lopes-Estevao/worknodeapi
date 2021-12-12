
class Presenter {
    static async CREATED(res, body) {
        return await res.status(201).json({
            "data": body,
            "message": "Created",
            "status": 201
        })
    }


    static DELETED(res, body) {
        return res.status(200).json({
            "data": body.id,
            "message": "Deleted",
            "status": 200
        })
    }


}

module.exports = Presenter