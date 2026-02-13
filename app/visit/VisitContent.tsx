'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { VisitInfo } from '../components/sections/VisitInfo';

export default function VisitPage() {
    return (
        <>
            <Header />
            <main className="bg-cream min-h-screen pt-24">
                <VisitInfo />
            </main>
            <Footer />
        </>
    );
}
