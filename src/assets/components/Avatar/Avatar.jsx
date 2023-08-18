import { useState } from 'react'
import styles from './Avatar.module.css'



function Avatar() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.avatar}>
        <img src="./avatar.png" alt="" />
    </div>
  )
}

export default Avatar
