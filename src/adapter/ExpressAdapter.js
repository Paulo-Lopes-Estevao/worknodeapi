module.exports = class ExpressAdapter{
    static create(func){
        return async function(req, res){
            const object = await func(req.params, req.body, res);
            res
        }
    }
}