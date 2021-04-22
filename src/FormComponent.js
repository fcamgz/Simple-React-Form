import React from 'react'

function FormComponent(props){
    return(
        <div className='container'>
            <br/> 
            <form className='table table-dark'>
                <div className='d-flex flex-column'>
                <h1>Simple Form</h1>
                <br/>
                <h4>Personal Info</h4>
                    <label >
                        First Name <input placeholder='First Name' value={props.data.firstName} onChange={props.handleChange} type='text' name='firstName'/>
                    </label>
                    <label>
                        Last Name <input placeholder='Last Name' value={props.data.lastName} onChange={props.handleChange} type='text' name='lastName'/>
                    </label>
                    <label>
                        Age <input placeholder='Age' value={props.data.age} onChange={props.handleChange} type='text' name='age'/>
                    </label>
                    <label>
                        <input name='gender' value='Female' checked={props.data.gender==='Female'} onChange={props.handleChange} type='radio'/> FEMALE
                    </label>
                    <label>
                        <input name='gender' value='Male' checked={props.data.gender==='Male'} onChange={props.handleChange} type='radio'/> MALE
                    </label>
                </div>
                <h4>Choose Your Favorite Food</h4>
                <select name='favoriteFood' onChange={props.handleChange} value={props.data.favoriteFood}>
                    <option>-- Choose your favorite food -- </option>
                    <option value='Hamburger'>Hamburger - Fries</option>
                    <option value='Pizza'>Pizza</option>
                    <option value='Chicken Wings'>Chicken Wings</option>
                    <option value='Beef Kebab'>Beef Kebab</option>
                </select>
            </form>
            <br/>
            <div>
                <p>I am <b>{props.data.firstName} {props.data.lastName}</b></p>
                <p>My age is <b>{props.data.age}</b> years old</p>
                <p>My gender is <b>{props.data.gender}</b></p>
                <p>My Favorite Food is <b>{props.data.favoriteFood}</b></p>
                <div className='d-flex justify-content-center'>
                    <img style={{height:'5em'}} src={props.data.gender === '' ? process.env.PUBLIC_URL + '/img/noimage.png' : process.env.PUBLIC_URL + '/img/' + props.data.gender + '.png'}></img>
                    <img style={{height:'5em'}} src={props.data.age > 20 ? process.env.PUBLIC_URL + '/img/Adult.png' : process.env.PUBLIC_URL + '/img/Kid.png'}></img>
                    <img style={{height:'5em'}} src={props.data.gender === 'Female' ? '' : ''}></img>
                    <img style={{height:'5em'}} src={props.data.favoriteFood === '' ? process.env.PUBLIC_URL + '/img/noimage.png' : process.env.PUBLIC_URL + '/img/' + props.data.favoriteFood + '.png'}></img>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default FormComponent
