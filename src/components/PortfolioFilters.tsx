import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconTablerArrowRight from '~icons/tabler/arrow-right';

// Define TypeScript interfaces for the props
interface Project {
  slug: string;
  title: string;
  description: string;
  service: string;
  industry: string;
  budget: string;
  tags: string[];
  img: string;
}

interface Translations {
    filterService: string;
    filterIndustry: string;
    filterBudget: string;
    allServices: string;
    allIndustries: string;
    allBudgets: string;
    noResults: string;
    viewProject: string;
}

interface Props {
  projects: Project[];
  services: string[];
  industries: string[];
  budgets: string[];
  t: Translations;
  lang: string; // Add lang to props
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

const PortfolioFilters: React.FC<Props> = ({ projects, services, industries, budgets, t, lang }) => {
    const [selectedService, setSelectedService] = useState<string>('all');
    const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
    const [selectedBudget, setSelectedBudget] = useState<string>('all');

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const serviceMatch = selectedService === 'all' || project.service === selectedService;
            const industryMatch = selectedIndustry === 'all' || project.industry === selectedIndustry;
            const budgetMatch = selectedBudget === 'all' || project.budget === selectedBudget;
            return serviceMatch && industryMatch && budgetMatch;
        });
    }, [projects, selectedService, selectedIndustry, selectedBudget]);
    
    const selectClasses = "w-full md:w-auto bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary";

    return (
        <div>
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                <select value={selectedService} onChange={e => setSelectedService(e.target.value)} className={selectClasses}>
                    <option value="all">{t.allServices}</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)} className={selectClasses}>
                    <option value="all">{t.allIndustries}</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
                <select value={selectedBudget} onChange={e => setSelectedBudget(e.target.value)} className={selectClasses}>
                    <option value="all">{t.allBudgets}</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
            </div>

            {/* Projects Grid */}
            <AnimatePresence>
                {filteredProjects.length > 0 ? (
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.a
                                href={`/${lang}/portfolio/${project.slug.split('/').pop()}`}
                                key={project.slug}
                                custom={i}
                                variants={cardVariants}
                                className="group relative block bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="relative h-60 w-full overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                        <div className="flex items-center gap-2 text-white text-lg font-semibold">
                                            {t.viewProject} <IconTablerArrowRight />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                    <p className="text-medium-text-light dark:text-medium-text mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-20"
                     >
                        <p className="text-xl text-medium-text-light dark:text-medium-text">{t.noResults}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioFilters;
