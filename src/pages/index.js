import React from 'react';
import style from './department.module.css';
import dep_img from '../assests/images/department.jpg'

let para1 = "The Department of Chemical Engineering was established in 1963 with an Undergraduate programme in Chemical Engineering.A Masterâ€™s course in Equipment and Plant Design was initiated in 1970."
let para1_1 = "Later on, two new Masterâ€™s courses namely Industrial Pollution Abatement and Advanced Transfer Processes were inducted. Subsequently,the specialisation of Equipment and Plant Design was redesigned, updated and re-christened as Computer Aided Process Plant Design."
let para2 = "At present, the Department is running three post-graduate programmes leading to M.Tech. (Chem.) degree with specialization in Computer Aided Process Plant Design, Industrial Pollution Abatement and Industrial Safety & Hazards Management.A five-year integrated programme on Hydrocarbon Engineering offering dual degree of B.Tech. (Chem. Engg.) and M.Tech. (Hydrocarbon Engineering) has been started from the session 2003-04 .The Department offers high level research programme in diverse areas of Chemical Engineering. It has been providing consultancy to chemical and allied industries in several areas.";
const Greet = () => {
    return (
        <div className="container-fluid mt-5" style={{backgroundColor: "rgba(48, 51, 65, 1)"}}>
            <div className="container pb-5">
                <div className="row mb-3">
                    <div className="col-12 mt-5">
                        <h1 className={style.heading}>About the department</h1>
                    </div>
                </div>
                <div className="row mt-3" style={{ backgroundColor: " rgba(76, 78, 91, 1)" }}>
                    <div className="col-lg-6 mt-2">
                        <img src={dep_img} alt="department_pic" className="w-100 mt-2" />
                    </div>
                    <div className="col-lg-6">
                        <p className={style.dept_1}>{para1}<br /><br/>{para1_1}</p>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: " rgba(76, 78, 91, 1)" }}>
                    <div className="col-12 mt-3">
                    <p className={style.dept_2}>{para2}</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Greet;