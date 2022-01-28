exports.createUserValidator = (req,res,next)=> {
    // name
    req.check('name',"Write a name").notEmpty()
    req.check('name',"name must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
    
    // city
    req.check('city',"Write a city").notEmpty()
    req.check('city',"city must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });
    // contact
    req.check('contact',"Write a contact").notEmpty()
    req.check('contact',"contact must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });
    // company
    req.check('company',"Write a company").notEmpty()
    req.check('company',"Company must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    // Check for errors
    const errors = req.validationErrors()
    // if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }

    //Proceed to next middleware
    next();
};