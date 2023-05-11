export default{
    async get(){
        let puerto = 4000;
        let url = `http://localhost:${puerto}/usuarios`;
        let res = await(fetch(url))
        let json = await(res.json())
        return json
    },
    async delete(){
        console.log(await(this.get()));
    }
}