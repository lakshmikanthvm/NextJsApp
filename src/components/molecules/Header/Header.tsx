import { useRouter } from "next/router";
import React, { FC } from "react";
import { View, Logo, Click } from "vcc-ui";
import styles from "./header.module.css";

export const Header: FC = () => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <View
                direction={['column', 'row', 'column']}
                padding={2}
                marginLeft={1}
            >
                <Click onClick={() => router.replace('/')}>
                    <Logo type="spreadmark" alt="Volvo Cars" height={8} />
                </Click>
            </View>
        </header>
    );
}