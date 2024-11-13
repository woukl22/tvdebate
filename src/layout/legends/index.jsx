import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scriptIsOpen } from '../../redux/slices';
import styles from './legends.module.css';

// 아이콘 + 이름 세트
const LabelBox = ({ color, name, shape }) => {
    const renderShape = () => {
        switch (shape) {
            case 'agree':
                return <div className={styles.circle} style={{ borderColor: color }}></div>;
            case 'disagree':
                return <div className={styles.cross}>
                            <div className={styles.topLeft} />
                            <div className={styles.topRight} />
                            <div className={styles.bottomLeft} />
                            <div className={styles.bottomRight} />
                        </div>;
            case 'argumentation-area':
                return <div className={styles.argumentationArea}>
                            <div className={styles.diamond}/>
                            <div className={styles.multicolorCircle}/>
                        </div>;
            default:
                return <div className={styles.colorBox} style={{ backgroundColor: color }}></div>;
        }
    };

    return (
        <span className={styles.labelContainer}>
            {renderShape()}
            <span>{name}</span>
        </span>
    );
};


const Legends = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.script.isOpen);
    
    return (
        <div className={styles.legends}>
            <div className={styles.legendsText}>
                Legends: 
            </div>
            <div className={styles.legendsContainer}>
                <div className={styles.upperContainer}>
                    <LabelBox color="#B60E3C" name="이준석" />
                    <LabelBox color="#C7611E" name="박휘락" />
                    <LabelBox color="#00AB6E" name="김종대" />
                    <LabelBox color="#00a0e2" name="장경대" />
                    <LabelBox color="#808080" name="진행자" />
                </div>
                <div className={styles.lowerContainer}>
                    <LabelBox color="#000000" name="찬성" shape="agree" />
                    <LabelBox color="#000000" name="반대" shape="disagree" />
                    <LabelBox color="#400000" name="논쟁" />
                    <LabelBox color="#FF0000" name="논쟁구간" shape="argumentation-area" />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => dispatch(scriptIsOpen())}>
                    {isOpen ? "Hide Script" : "View Script"}
                </button>
            </div>
        </div>
    );
};

export default Legends;