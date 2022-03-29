//Catch all API routes
const handler = (req, res) => {
    const params = req.query.params
    console.log("🚀 ~ file: [...params].js ~ line 4 ~ handler ~ params", params)
    res.status(200).json(params)
}
export default handler