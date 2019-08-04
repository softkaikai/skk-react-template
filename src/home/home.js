import React, { useState } from 'react';
import classNames from 'classNames';
import styles from './home.css';
import { Route, Link } from 'react-router-dom';
import Food from './food/food';
import Animal from './animal/animal';

export default function Home()
{
    const demoClass = classNames('kaikai');
    console.log(demoClass);
    return (
        <div className={styles.box}>
            <div className={styles.left}>
                <Link to="/food">food</Link>
                <Link to="/animal">animal</Link>
            </div>
            <div className={styles.right}>
                <Route path="/food" component={Food} />
                <Route path="/animal" component={Animal} />
            </div>
        </div>
    )
}