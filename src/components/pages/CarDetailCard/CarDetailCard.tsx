import React, { FC } from "react";
import Image from "next/image";
import { Text, Link, Flex } from "vcc-ui";

export interface CarDetail {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
}

export const CarDetailCard: FC<CarDetail>  = ({ id, modelName, bodyType, modelType, imageUrl }) => {
    return (
        <Flex extend={{ flexGrow: 1, flexShrink: 0, flexBasis: '21%', margin: '10px', textAlign: 'justify' }}>
            <Flex>
                <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
                    {bodyType.toUpperCase()}
                </Text>
                <Flex extend={{ untilL: { flexDirection: 'column' }, fromL: { flexDirection: 'row' }, }}>
                    <Text subStyle="emphasis" extend={{ paddingRight: "10px" }}>
                        {modelName}
                    </Text>
                    <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
                        {modelType}
                    </Text>
                </Flex>
            </Flex>
            <Flex extend={{ margin: '15px 0' }}>
                <Image 
                    src={imageUrl} 
                    alt={`Volvo ${modelName} ${bodyType.toUpperCase()} car image`}
                    width="800" 
                    height="600" 
                    loading="lazy"
                    aria-hidden="true"
                />
            </Flex>
            <Flex extend={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Link href={`/learn/${id}`} arrow="right">Learn</Link>
                <Link href={`/shop/${id}`} arrow="right">Shop</Link>
            </Flex>
        </Flex>
    );
}