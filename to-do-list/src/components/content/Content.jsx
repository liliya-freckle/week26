import React from 'react'
import AddButton from '../button/AddButton'
import ListItem from './ListItem'
import styles from './Content.module.css'


const Content = () => {
    const items = [{
        id: "1",
        name: "Check the lesson",
        isChecked: false,
        color: "red",
    }, {
        id: "2",
        name: "To do hometask",
        isChecked: false,
        color: "blue",
    }, {
        id: "3",
        name: "To have time outside",
        isChecked: false,
        color: "green",
    }, {
        id: "4",
        name: "To buy some food",
        isChecked: false,
        color: "orange",
    }]

    return (
        <main className={styles.content}>
            <ul>
                {
                    items.map((item) =>
                        <ListItem key={item.id} name={item.name} color={item.color} />
                    )
                }
            </ul>
            <AddButton />
        </main>
    )
}

export default Content