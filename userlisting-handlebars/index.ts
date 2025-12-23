const express = require('express');
const app = express();
const port = 3000;
const db = require('./models/index.js');
const userRoutes = require('./router/router');
const viewRoutes = require('./router/viewRouter')
const path = require('path');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const hbs = exphbs.create({
    extname: '.hbs', 
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'), 
    defaultLayout: 'main', 
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'./views' ));

db.sequelize.sync().then(() => {
    app.use(express.json());
    app.use('/api', userRoutes);
    app.use('/users', viewRoutes);
    app.listen(port, () => {
        console.log(`App listing on port ${port}`);
    })
})