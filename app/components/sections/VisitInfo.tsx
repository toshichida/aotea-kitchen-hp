'use client';

import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export const VisitInfo = () => {
    const { t, language } = useLanguage();

    return (
        <section className="py-24 bg-cream">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Info Side */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-10">
                        <h2 className="font-serif text-4xl text-sumi">
                            {t('nav.visit')}
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <MapPin className="w-8 h-8 text-forest shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-forest">Aotea Kitchen</h3>
                                    <p className="text-sumi/80 leading-relaxed">
                                        123 Ponsonby Road<br />
                                        Ponsonby, Auckland 1011<br />
                                        New Zealand
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <Clock className="w-8 h-8 text-forest shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-forest">Opening Hours</h3>
                                    <ul className="text-sumi/80 space-y-1">
                                        <li className="flex justify-between w-48"><span>Mon - Fri</span> <span>8:00 - 17:00</span></li>
                                        <li className="flex justify-between w-48"><span>Sat - Sun</span> <span>9:00 - 16:00</span></li>
                                        <li className="flex justify-between w-48 text-red-500"><span>Tue</span> <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <Phone className="w-8 h-8 text-forest shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-forest">Contact</h3>
                                    <p className="text-sumi/80">
                                        +64 9 XXX XXXX<br />
                                        hello@aoteakitchen.nz
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full md:w-auto self-start">
                            {language === 'en' ? 'Get Directions' : '道順を表示'}
                        </Button>
                    </div>

                    {/* Map Side */}
                    <div className="h-[400px] lg:h-auto bg-stone-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium">
                            Google Maps Placeholder
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, opacity: 0.6, pointerEvents: 'none' }} // Simplified placeholder style
                            src="https://maps.google.com/maps?q=123%20Ponsonby%20Road,%20Auckland&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            aria-hidden="false"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
