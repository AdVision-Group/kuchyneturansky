import React, { useEffect, useContext } from 'react'
import { ReferenceContext } from '../../context/reference/reference.context'
import { AdminContext } from '../../context/admin/admin.context'

import ReferenceForm from '../reference-form/reference-form.component'
import CustomSlider from '../slider/slider.component'
import Spinner from '../spinner/spinner.component'
import CustomButton from '../custom-button/custom-button.component'

import {
    ButtonsContainer,
    CardCol,
    MessageContainer,
    ProjectOverviewCard,
    ReferencesContainer,
} from './reference-container.styles'

const Referencies = ({ category }) => {
    const { currentUser } = useContext(AdminContext)
    const {
        getReferenciesByCategory,
        openRefForm,
        showRefForm,
        referencies,
        isLoading,
        deleteReference
    } = useContext(ReferenceContext)

    useEffect(() => {
        getReferenciesByCategory(category)
    }, [])

    if (isLoading) return <Spinner />

    return (
        <React.Fragment>

            <ReferencesContainer>
                {referencies && referencies.length ? (
                    referencies.map((reference, idx) => (
                        <ProjectOverviewCard key={idx}>
                            <CardCol>
                                <CustomSlider items={reference.images} />
                            </CardCol>
                            <CardCol>
                                <h2>{reference.name}</h2>
                                <p>
                                    {reference.description}
                                </p>

                                {currentUser && <ButtonsContainer>
                                    <CustomButton onClick={() => openRefForm(reference)}>
                                        Upraviť
                                </CustomButton>
                                    <CustomButton onClick={() => deleteReference(reference)} inverted>
                                        Odstraniť
                                </CustomButton>
                                </ButtonsContainer>}

                            </CardCol>
                        </ProjectOverviewCard>


                    ))
                ) : (
                        <MessageContainer>
                            Žiadné refencie
                        </MessageContainer>
                    )
                }

                {currentUser && <CustomButton onClick={() => openRefForm()} center>
                    Pridať referenciu
                </CustomButton>}
            </ReferencesContainer>
            { showRefForm && <ReferenceForm category={category} />}
        </React.Fragment>
    )
}

export default Referencies
