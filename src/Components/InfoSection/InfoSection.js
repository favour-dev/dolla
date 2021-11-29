import React from 'react'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InforRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home">Button</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                    </InforRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
