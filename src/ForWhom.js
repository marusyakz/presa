import React from 'react';
import { FaBuilding, FaCity, FaHandHoldingHeart } from 'react-icons/fa';

const ForWhom = () => {
    const targetGroups = [
        { id: 1, title: 'Малый и средний бизнес', description: 'Идеально подходит для компаний, которые ищут проверенных поставщиков и хотят оптимизировать процессы закупок.', icon: <FaBuilding /> },
        { id: 2, title: 'Корпоративные клиенты', description: 'Наш портал предоставляет возможности для крупных организаций, которым важно качество и безопасность при выборе поставщиков.', icon: <FaCity /> },
        { id: 3, title: 'Поставщики услуг', description: 'Для профессиональных поставщиков, желающих расширить клиентскую базу и получить доступ к новым заявкам.', icon: <FaHandHoldingHeart /> },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-20 text-white">
            <div className="container mx-auto py-6">
                <h2 className="text-4xl font-semibold text-center mb-8">Для кого этот портал?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {targetGroups.map((group) => (
                        <div key={group.id} className="transition relative z-50 transform hover:scale-105 hover:shadow-lg rounded-lg p-6 text-center bg-black bg-opacity-60 backdrop-blur-sm shadow-xl">
                            <div className="text-5xl text-blue-400 mb-4 flex items-center justify-center">
                                {group.icon}
                            </div>
                            <h3 className="text-2xl font-medium mb-2">{group.title}</h3>
                            <p className="text-lg">{group.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForWhom;
