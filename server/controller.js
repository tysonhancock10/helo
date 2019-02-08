const bcrypt= require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        
        
        const {username, password} = req.body
        const {session} = req;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register({username: username, password: hash})
        newUser = newUser[0];
        session.user = {...newUser};
        res.status(201).send(session.user)

    },
    login: async (req, res) => {

        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.user.login({username: username});
        user = user[0]

        if (!user){
        res.sendStatus(400)}
        const foundUser = bcrypt.compareSync(password, user.password);
       
        if(foundUser){
            delete user.password
            session.user = user;
            res.status(200).send(session.user)
        }
        else {
            res.status(401).send('nope')
        }
    },
    searchOne: (req, res) => {
        const {title} = req.query
        const {id} = req.params
        const {content} = req.body
        if (content && title.includes('')){
            res.status(200).send(content)
        } else if (content && title.includes('')){
            
        }
        
        // const {search} = req.queries
        // const {userposts} = req.body
        // const {params} = req
        // const 
        // const db = req.app.get('db');
        // let user = await db.search.searchOne({title: search, content: userposts, id: params})
        // user = user[0]
        // console.log({user})
        // if(userposts && search.includes('')){
            
        //     res.status(200).send(req.body)
        // } else if(!userposts && search === '')
        

//         If userposts is true AND there is a search string, the endpoint should respond with all the posts where...
// The title contains the search string.
// If userposts is false AND there is no search string, the endpoint should respond with all the posts where...
// The current user is NOT the author.
// If userposts is false AND there is a search string, the endpoint should respond with all the posts where...
// The current user is NOT the author.
// The title contains the search string.
// If userposts is true AND there is no search string, the endpoint should respond with all the posts.
    }
}