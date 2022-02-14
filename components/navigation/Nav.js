import React  from "react";
import styles from "../../styles/nav.module.css";
import DateTime from "./DateTime";

function Nav(){

return(

    <div>

<header  className="header">

<p className={styles.title}>News Express</p>
<div className={styles.container}>

    <div className={styles.left}>
        <DateTime />
    </div>

    <div className={styles.middle}>

        <ul> 
            <li className={styles.list_item}><a className={styles.middle_item} href="">Trending</a></li>
            <li className={styles.list_item}><a className={styles.middle_item} href="">Politics</a></li>
            <li className={styles.list_item}><a className={styles.middle_item} href="">Covid</a></li>
            <li className={styles.list_item}><a className={styles.middle_item} href="">Crypto</a></li>
            <li className={styles.list_item}><a className={styles.middle_item} href="">Market</a></li>
            <li className={styles.list_item}><a className={styles.middle_item} href="">Sports</a></li>
        </ul>


    </div>

    <div className={styles.right}>
        <input type="text" placeholder="Search for news" className={styles.searchNavBar} />
        <button className={styles.btnNavBar}>Go</button>
    </div>
</div>

</header>

    </div>


);


} 

export default Nav;