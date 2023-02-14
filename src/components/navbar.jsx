import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const {tasksList} = useSelector((state)=> state.tasks)
    return (
        <div>
            <h1 className='text-center my-4 text-primary'>Project Management</h1>
            <p className='text-center lead'>{`Currently ${tasksList.length} tasks pending`}</p>
        </div>
    );
};


Navbar.propTypes = {

};


export default Navbar;
