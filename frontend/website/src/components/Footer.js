'use client';

import styles from './Footer.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {icons} from "@/constants/icons";

import Link from "next/link";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                {icons.map((icon, index) => (
                    <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon color={icon.color} icon={icon.icon}/>
                    </Link>
                    ))}
            </div>
            <div className={styles.info}>
                <p>Criado por Max ❤️</p>
            </div>
        </div>
    );
}

export default Footer;