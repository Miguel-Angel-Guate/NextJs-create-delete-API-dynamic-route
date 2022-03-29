const firstAPI = (req, res) => {
console.log("🚀 ~ file: index.js ~ line 2 ~ firstAPI ~ req", req)
    res.status(200).json('hello')
}
 
export default firstAPI; 