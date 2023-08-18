import { useState } from 'react'
import styles from './HeaderTitle.module.css'



function HeaderTitle() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.headerTitle}>
          <div>Vladimir</div>
          <div>Full Stack Developer</div>
    </div>
  )
}

export default HeaderTitle

