import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import Studies_Timeline from '../../components/Studies_Timeline/Studies_Timeline';
import Contact from '../../components/Contact/Contact';

export default function HomeContainer() {

    return (
        <>
            <Hero />
            <Skills />
            <AboutMe />
            <Studies_Timeline />
            <Contact />
        </>
    )
}