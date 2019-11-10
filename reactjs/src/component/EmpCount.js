import React, { Component } from 'react';
import styles from '../styles/EmpCount.module.css';


class EmpCount extends Component {
    render() {
        return(
            <div className={styles.divEmpAll}>
                <div className={styles.divEmpInd}>
                    <h2 className={styles.empInNum}>###</h2>
                    <h3 className={styles.empIn}>Employees In</h3>
                </div>
                <div className={styles.divEmpInd}>
                    <h2 className={styles.empTotalNum}>###</h2>
                    <h3 className={styles.empTotal}>Total Employees</h3>
                </div>
                <div className={styles.divEmpInd}>
                    <h2 className={styles.empOutNum}>###</h2>
                    <h3 className={styles.empOut}>Employees Out</h3>
                </div>
            </div>
        )
    }
}

export default EmpCount;

/*

*/