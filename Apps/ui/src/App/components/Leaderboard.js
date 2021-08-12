import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles'

function Leaderboard(props) {
    const users = useSelector(state => state.users)

    const headings = [
        'Username',
        'Patricipation Points',
    ];

    const useStyles = makeStyles({
        tableMain: {
            border: '1px solid black',
            width: '100%',
        },
        right: {
            textAlign: 'right',
            border: '1px solid black',
            fontWeight: 'bold',
            padding: '2px',
        },
        left: {
            textAlign: 'left',
            border: '1px solid black',
            fontWeight: 'bold',
            padding: '2px',
        },
        tableDiv: {
            width: '50%',
        },
        header: {
            textAlign: 'center',
        }

        

    })

    const dialogStyle = useStyles();
    
    return (
       <> 
       <h1>Leaderboard:</h1>
        <div className = {dialogStyle.tableDiv}>
            <table className = {dialogStyle.tableMain}>
                <tbody>
                <tr>
                    <th classname = {dialogStyle.left}>Username</th>
                    <th classname = {dialogStyle.right}>Participation Points</th>
                </tr>
                {(props.rows).map((u) => (
                    <tr>
                        <td className={dialogStyle.left}>{u.username}</td>
                        <td className={dialogStyle.right}>{u.points}</td>
                    </tr>
                    
                ))}
                </tbody>
            </table>
            
        </div>
        </>
    )
}


export default Leaderboard;