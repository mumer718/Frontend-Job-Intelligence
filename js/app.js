/**
 * JOB MARKET INTELLIGENCE SYSTEM — FRONTEND APPLICATION
 * Tech Stack: Vanilla JavaScript (ES6+), Fetch API ready, HTML5, CSS3
 * Architecture: Clean API abstraction layer (JobAPI) with client-side SPA routing.
 */

// ============================================================================
// 1. MOCK DATASET & API SERVICE ABSTRACTION LAYER
// ============================================================================

const MOCK_JOBS = [
    {
        id: "job-101",
        title: "Senior Data Platform Engineer",
        company: "Northwind Analytics",
        location: "Lahore, Pakistan",
        country: "Pakistan",
        workType: "Hybrid",
        category: "Data",
        postedDate: "2 days ago",
        postedTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
        source: "Jobicy",
        salary: "PKR 220k - 280k / mo",
        salaryMin: 220000,
        salaryMax: 280000,
        skills: ["Python", "SQL", "PostgreSQL", "ETL", "Pandas", "Docker"],
        description: "We are seeking a Senior Data Platform Engineer to design and optimize large-scale ETL data ingestion pipelines. You will work closely with database architects to build robust SQLAlchemy data models and maintain PostgreSQL database performance for real-time reporting.",
        url: "https://jobicy.com/jobs/data-platform-engineer-101"
    },
    {
        id: "job-102",
        title: "Backend Flask API Developer",
        company: "Cascade Robotics",
        location: "Remote",
        country: "Remote",
        workType: "Remote",
        category: "Backend",
        postedDate: "1 day ago",
        postedTimestamp: Date.now() - 1 * 24 * 60 * 60 * 1000,
        source: "WeWorkRemotely",
        salary: "$95,000 - $125,000 / yr",
        salaryMin: 95000,
        salaryMax: 125000,
        skills: ["Python", "Flask", "REST APIs", "SQLAlchemy", "PostgreSQL", "pytest"],
        description: "Cascade Robotics is looking for a Python Backend Developer skilled in Flask and SQLAlchemy. You will engineer reliable REST API services that aggregate external telemetry data, manage authentication, and serve low-latency JSON endpoints.",
        url: "https://weworkremotely.com/jobs/backend-flask-developer-102"
    },
    {
        id: "job-103",
        title: "Frontend UI/UX Engineer",
        company: "Anchor & Vale",
        location: "Karachi, Pakistan",
        country: "Pakistan",
        workType: "On-site",
        category: "Frontend",
        postedDate: "3 days ago",
        postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
        source: "Company Careers",
        salary: "PKR 150k - 190k / mo",
        salaryMin: 150000,
        salaryMax: 190000,
        skills: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Responsive Web Design"],
        description: "Anchor & Vale requires an experienced Frontend Engineer to build high-performance web dashboard interfaces. You will collaborate with product designers to craft semantic HTML5 templates, modular CSS stylesheets, and responsive JavaScript interfaces.",
        url: "https://anchorvale.com/careers/frontend-developer-103"
    },
    {
        id: "job-104",
        title: "Web Scraping & Crawler Engineer",
        company: "Meridian Data Co.",
        location: "Remote",
        country: "Remote",
        workType: "Remote",
        category: "Python",
        postedDate: "Today",
        postedTimestamp: Date.now() - 5 * 60 * 60 * 1000,
        source: "RemoteOK",
        salary: "$80,000 - $105,000 / yr",
        salaryMin: 80000,
        salaryMax: 105000,
        skills: ["Python", "Scrapy", "XPath", "Item Pipelines", "PostgreSQL", "Git"],
        description: "Meridian Data Co. is expanding its data acquisition team. We need a Web Scraping Engineer proficient with Scrapy to develop resilient spiders, handle anti-scraping measures, and build custom Item Pipelines that validate scraped job postings.",
        url: "https://remoteok.com/remote-jobs/web-scraping-engineer-104"
    },
    {
        id: "job-105",
        title: "Data Analyst & Reporting Specialist",
        company: "Fieldstone Insights",
        location: "Lahore, Pakistan",
        country: "Pakistan",
        workType: "Hybrid",
        category: "Data",
        postedDate: "4 days ago",
        postedTimestamp: Date.now() - 4 * 24 * 60 * 60 * 1000,
        source: "Jobicy",
        salary: "PKR 140k - 180k / mo",
        salaryMin: 140000,
        salaryMax: 180000,
        skills: ["Pandas", "Python", "SQL", "Data Visualization", "Jupyter"],
        description: "Join Fieldstone Insights as a Data Analyst. You will analyze structured job market datasets using Pandas, write SQL queries, clean complex data structures, and produce statistical summaries for business stakeholders.",
        url: "https://jobicy.com/jobs/data-analyst-105"
    },
    {
        id: "job-106",
        title: "DevOps & Infrastructure Specialist",
        company: "Harborline Systems",
        location: "Islamabad, Pakistan",
        country: "Pakistan",
        workType: "On-site",
        category: "DevOps",
        postedDate: "5 days ago",
        postedTimestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
        source: "Public Job Board",
        salary: "PKR 180k - 240k / mo",
        salaryMin: 180000,
        salaryMax: 240000,
        skills: ["Docker", "Linux", "PostgreSQL", "CI/CD", "Bash", "Python"],
        description: "Harborline Systems is looking for a DevOps Engineer to manage database server deployments, automate deployment pipelines, and configure PostgreSQL container instances for high reliability.",
        url: "https://publicboard.com/jobs/devops-specialist-106"
    },
    {
        id: "job-107",
        title: "AI / Machine Learning Engineer",
        company: "Apex Cloud Corp",
        location: "San Francisco, CA, USA",
        country: "United States",
        workType: "Hybrid",
        category: "AI / ML",
        postedDate: "1 day ago",
        postedTimestamp: Date.now() - 1 * 24 * 60 * 60 * 1000,
        source: "Company Careers",
        salary: "$130,000 - $165,000 / yr",
        salaryMin: 130000,
        salaryMax: 165000,
        skills: ["Python", "PyTorch", "Pandas", "Scikit-Learn", "NLP", "APIs"],
        description: "Apex Cloud Corp is hiring an AI Engineer to develop Natural Language Processing algorithms for resume parsing and skill extraction. Experience with Python, Pandas, and deep learning frameworks required.",
        url: "https://apexcloud.com/careers/ai-ml-engineer-107"
    },
    {
        id: "job-108",
        title: "Full Stack Web Engineer (Python/JS)",
        company: "ByteCraft Studios",
        location: "London, UK",
        country: "United Kingdom",
        workType: "Remote",
        category: "Web Development",
        postedDate: "Today",
        postedTimestamp: Date.now() - 3 * 60 * 60 * 1000,
        source: "WeWorkRemotely",
        salary: "£65,000 - £80,000 / yr",
        salaryMin: 85000,
        salaryMax: 105000,
        skills: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "PostgreSQL"],
        description: "Looking for a Full Stack Developer to build modern web applications using Flask APIs on the backend and native JavaScript on the frontend. Should be familiar with database design and responsive web standards.",
        url: "https://weworkremotely.com/jobs/full-stack-engineer-108"
    },
    {
        id: "job-109",
        title: "Java Backend Microservices Engineer",
        company: "Vanguard Tech",
        location: "Berlin, Germany",
        country: "Germany",
        workType: "Hybrid",
        category: "Java",
        postedDate: "6 days ago",
        postedTimestamp: Date.now() - 6 * 24 * 60 * 60 * 1000,
        source: "Public Job Board",
        salary: "€70,000 - €85,000 / yr",
        salaryMin: 75000,
        salaryMax: 92000,
        skills: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs"],
        description: "Vanguard Tech is recruiting a Java Microservices Engineer to develop enterprise APIs, manage database connections, and ensure system scalability.",
        url: "https://publicboard.com/jobs/java-engineer-109"
    },
    {
        id: "job-110",
        title: ".NET Core API Developer",
        company: "Zenith Software",
        location: "Dubai, UAE",
        country: "United Arab Emirates",
        workType: "On-site",
        category: ".NET",
        postedDate: "1 week ago",
        postedTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000,
        source: "Company Careers",
        salary: "AED 18,000 - 24,000 / mo",
        salaryMin: 60000,
        salaryMax: 78000,
        skills: [".NET", "C#", "SQL Server", "REST APIs", "Entity Framework"],
        description: "Zenith Software is seeking a .NET Core Developer to maintain backend APIs, write efficient SQL procedures, and collaborate with frontend client teams.",
        url: "https://zenithsoftware.ae/careers/dotnet-developer-110"
    },
    {
        id: "job-111",
        title: "Python Scraper & ETL Pipeline Lead",
        company: "Northwind Analytics",
        location: "Remote",
        country: "Remote",
        workType: "Remote",
        category: "Python",
        postedDate: "2 days ago",
        postedTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
        source: "Jobicy",
        salary: "$90,000 - $115,000 / yr",
        salaryMin: 90000,
        salaryMax: 115000,
        skills: ["Python", "Scrapy", "SQLAlchemy", "PostgreSQL", "Pandas"],
        description: "Lead scraper developer responsible for maintaining Scrapy spiders across multiple job boards, building automated error-recovery pipelines, and storing cleaned data into PostgreSQL database clusters.",
        url: "https://jobicy.com/jobs/python-scraper-etl-lead-111"
    },
    {
        id: "job-112",
        title: "Junior Data Engineer",
        company: "Cascade Robotics",
        location: "Islamabad, Pakistan",
        country: "Pakistan",
        workType: "Hybrid",
        category: "Data",
        postedDate: "3 days ago",
        postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
        source: "Public Job Board",
        salary: "PKR 100k - 130k / mo",
        salaryMin: 100000,
        salaryMax: 130000,
        skills: ["Python", "SQL", "PostgreSQL", "Pandas"],
        description: "Great entry role for a Junior Data Engineer. You will assist in writing SQL scripts, inspecting raw database tables, and building Pandas analytics modules.",
        url: "https://publicboard.com/jobs/junior-data-engineer-112"
    }
];

/**
 * Saved Jobs Store (Session / LocalStorage)
 */
const SavedJobsStore = {
    savedIds: new Set(JSON.parse(localStorage.getItem('saved_jobs') || '[]')),
    toggle(id) {
        if (this.savedIds.has(id)) {
            this.savedIds.delete(id);
        } else {
            this.savedIds.add(id);
        }
        localStorage.setItem('saved_jobs', JSON.stringify(Array.from(this.savedIds)));
    },
    isSaved(id) {
        return this.savedIds.has(id);
    }
};

/**
 * JobAPI Abstraction Layer
 */
const MockJobAPI = {
    async getJobs({ query = '', country = '', workType = '', category = '', sort = 'newest', page = 1, limit = 6 } = {}) {
        await new Promise(r => setTimeout(r, 60));

        let filtered = [...MOCK_JOBS];

        if (query.trim()) {
            const q = query.toLowerCase().trim();
            filtered = filtered.filter(j =>
                j.title.toLowerCase().includes(q) ||
                j.company.toLowerCase().includes(q) ||
                j.category.toLowerCase().includes(q) ||
                j.skills.some(s => s.toLowerCase().includes(q))
            );
        }

        if (country) {
            filtered = filtered.filter(j => j.country.toLowerCase() === country.toLowerCase());
        }

        if (workType) {
            filtered = filtered.filter(j => j.workType.toLowerCase() === workType.toLowerCase());
        }

        if (category) {
            filtered = filtered.filter(j => j.category.toLowerCase() === category.toLowerCase());
        }

        if (sort === 'newest') {
            filtered.sort((a, b) => b.postedTimestamp - a.postedTimestamp);
        } else if (sort === 'oldest') {
            filtered.sort((a, b) => a.postedTimestamp - b.postedTimestamp);
        } else if (sort === 'salary-high') {
            filtered.sort((a, b) => (b.salaryMin || 0) - (a.salaryMin || 0));
        } else if (sort === 'salary-low') {
            filtered.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        }

        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / limit) || 1;
        const currentPage = Math.min(Math.max(1, page), totalPages);

        const startIndex = (currentPage - 1) * limit;
        const paginatedItems = filtered.slice(startIndex, startIndex + limit);

        return {
            jobs: paginatedItems,
            totalItems,
            totalPages,
            currentPage,
            limit
        };
    },

    async getJobById(id) {
        await new Promise(r => setTimeout(r, 40));
        return MOCK_JOBS.find(j => j.id === id) || null;
    },

    async getCategories() {
        const categoriesMap = {};
        MOCK_JOBS.forEach(j => {
            if (!categoriesMap[j.category]) {
                categoriesMap[j.category] = {
                    name: j.category,
                    count: 0,
                    skills: new Set(),
                    description: getCategoryDescription(j.category)
                };
            }
            categoriesMap[j.category].count += 1;
            j.skills.forEach(s => categoriesMap[j.category].skills.add(s));
        });

        return Object.values(categoriesMap).map(c => ({
            ...c,
            skills: Array.from(c.skills).slice(0, 4)
        }));
    },

    async getCompanies() {
        const companiesMap = {};
        MOCK_JOBS.forEach(j => {
            if (!companiesMap[j.company]) {
                companiesMap[j.company] = {
                    name: j.company,
                    jobCount: 0,
                    categories: new Set(),
                    locations: new Set(),
                    workModes: { Remote: 0, Hybrid: 0, 'On-site': 0 }
                };
            }
            companiesMap[j.company].jobCount += 1;
            companiesMap[j.company].categories.add(j.category);
            companiesMap[j.company].locations.add(j.location);
            if (companiesMap[j.company].workModes[j.workType] !== undefined) {
                companiesMap[j.company].workModes[j.workType] += 1;
            }
        });

        return Object.values(companiesMap).map(comp => ({
            ...comp,
            categories: Array.from(comp.categories),
            locations: Array.from(comp.locations)
        }));
    },

    async getAnalytics(regionFilter = 'all') {
        let dataset = [...MOCK_JOBS];

        if (regionFilter && regionFilter !== 'all') {
            dataset = dataset.filter(j => j.country.toLowerCase() === regionFilter.toLowerCase() || j.workType.toLowerCase() === regionFilter.toLowerCase());
        }

        const languages = { Python: 0, JavaScript: 0, SQL: 0, Java: 0, '.NET/C#': 0 };
        const countries = {};
        const workModes = { Remote: 0, Hybrid: 0, 'On-site': 0 };
        const categoryCounts = {};
        const skillFrequencies = {};

        dataset.forEach(j => {
            if (workModes[j.workType] !== undefined) workModes[j.workType]++;
            countries[j.country] = (countries[j.country] || 0) + 1;
            categoryCounts[j.category] = (categoryCounts[j.category] || 0) + 1;

            j.skills.forEach(s => {
                skillFrequencies[s] = (skillFrequencies[s] || 0) + 1;

                if (s.toLowerCase().includes('python')) languages.Python++;
                if (s.toLowerCase().includes('javascript')) languages.JavaScript++;
                if (s.toLowerCase().includes('sql') || s.toLowerCase().includes('postgresql')) languages.SQL++;
                if (s.toLowerCase().includes('java') && !s.toLowerCase().includes('javascript')) languages.Java++;
                if (s.toLowerCase().includes('.net') || s.toLowerCase().includes('c#')) languages['.NET/C#']++;
            });
        });

        const totalJobs = dataset.length;

        return {
            totalJobs,
            languages,
            countries,
            workModes,
            categoryCounts,
            skillFrequencies,
            timeTrend: [
                { week: "Week 1", count: Math.round(totalJobs * 0.4) },
                { week: "Week 2", count: Math.round(totalJobs * 0.65) },
                { week: "Week 3", count: Math.round(totalJobs * 0.85) },
                { week: "Week 4", count: Math.round(totalJobs * 0.75) },
                { week: "Week 5", count: totalJobs }
            ],
            salaryStats: {
                hasData: true,
                byCurrency: {
                    USD: {
                        count: 6,
                        minimum: 80000,
                        maximum: 165000,
                        average: 108500,
                        median: 105000
                    },
                    PKR: {
                        count: 6,
                        minimum: 100000,
                        maximum: 280000,
                        average: 175000,
                        median: 165000
                    }
                }
            }
        };
    }
};

const API_BASE_URL = window.JOB_API_BASE_URL || 'http://127.0.0.1:5000/api';

const FetchJobAPI = {
    async request(path) {
        const response = await fetch(`${API_BASE_URL}${path}`);
        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
        return response.json();
    },

    normalizeJob(job) {
        const salaryValues = [job.salary_min, job.salary_max]
            .filter(value => value !== null && value !== undefined);
        const salary = salaryValues.length
            ? `${job.salary_currency || ''} ${salaryValues.join(' - ')}${job.salary_period ? ` / ${job.salary_period}` : ''}`.trim()
            : '';
        return {
            id: String(job.id),
            title: job.title || '',
            company: job.company || '',
            location: job.location || '',
            country: job.country || '',
            workType: job.work_type || '',
            category: job.category || '',
            postedDate: job.posted_date || '',
            postedTimestamp: job.posted_date ? Date.parse(job.posted_date) : 0,
            source: job.source || '',
            salary,
            salaryMin: job.salary_min,
            salaryMax: job.salary_max,
            skills: job.skills || [],
            description: job.description || '',
            url: job.source_url || ''
        };
    },

    async getJobs({ query = '', country = '', workType = '', category = '', sort = 'newest', page = 1, limit = 6 } = {}) {
        const params = new URLSearchParams({
            search: query,
            country,
            work_type: workType,
            category,
            sort,
            page,
            limit
        });
        const data = await this.request(`/jobs?${params}`);
        return {
            jobs: (data.results || data.jobs || []).map(job => this.normalizeJob(job)),
            totalItems: data.total ?? data.totalItems ?? 0,
            totalPages: data.totalPages ?? 0,
            currentPage: data.page ?? data.currentPage ?? page,
            limit: data.limit ?? limit
        };
    },

    async getJobById(id) {
        try {
            return this.normalizeJob(await this.request(`/jobs/${encodeURIComponent(id)}`));
        } catch (error) {
            if (error.message.includes('404')) return null;
            throw error;
        }
    },

    async getCategories() {
        const categories = await this.request('/categories');
        return categories.map(category => ({
            ...category,
            description: getCategoryDescription(category.name),
            skills: category.skills || []
        }));
    },

    async getCompanies() {
        return this.request('/companies');
    },

    async getAnalytics(regionFilter = 'all') {
        const params = new URLSearchParams({ region: regionFilter });
        return this.request(`/analytics/summary?${params}`);
    }
};

/**
 * JobAPI Interface Layer
 * Defaults to FetchJobAPI if backend is reachable, otherwise seamlessly falls back to local MockJobAPI.
 */
const JobAPI = {
    async getJobs(params) {
        try {
            return await FetchJobAPI.getJobs(params);
        } catch (err) {
            return MockJobAPI.getJobs(params);
        }
    },
    async getJobById(id) {
        try {
            return await FetchJobAPI.getJobById(id);
        } catch (err) {
            return MockJobAPI.getJobById(id);
        }
    },
    async getCategories() {
        try {
            return await FetchJobAPI.getCategories();
        } catch (err) {
            return MockJobAPI.getCategories();
        }
    },
    async getCompanies() {
        try {
            return await FetchJobAPI.getCompanies();
        } catch (err) {
            return MockJobAPI.getCompanies();
        }
    },
    async getAnalytics(regionFilter) {
        try {
            return await FetchJobAPI.getAnalytics(regionFilter);
        } catch (err) {
            return MockJobAPI.getAnalytics(regionFilter);
        }
    }
};

function getCategoryDescription(cat) {
    const descriptions = {
        Python: "Backend services, web scraping automation, data pipelines, and Flask REST API development.",
        JavaScript: "Frontend interfaces, responsive UX design, native DOM scripts, and Fetch API integrations.",
        Data: "Data engineering, SQL database management, ETL sanitization, and Pandas analytics.",
        "AI / ML": "Machine learning, predictive models, NLP parsing algorithms, and PyTorch workflows.",
        Backend: "Server-side RESTful API architectures, SQLAlchemy ORM data layers, and microservices.",
        Frontend: "Semantic HTML5, modular CSS stylesheets, client-side state handling, and accessible UI.",
        DevOps: "Infrastructure deployment, Docker containerization, PostgreSQL cluster administration, and CI/CD.",
        Java: "Enterprise backend applications, Spring Boot APIs, and multi-threaded processing.",
        ".NET": "C# application development, Microsoft tech stack backend APIs, and database procedures.",
        "Web Development": "Full stack web development combining Python backend APIs with JavaScript interfaces."
    };
    return descriptions[cat] || "Technical specialization focusing on software development and data operations.";
}


// ============================================================================
// 2. CLIENT-SIDE SPA ROUTER & NAVIGATION CONTROLLER
// ============================================================================

const Router = {
    currentView: 'home',
    routeParams: {},

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();

        const toggleBtn = document.getElementById('mobile-toggle');
        const drawer = document.getElementById('mobile-drawer');

        if (toggleBtn && drawer) {
            toggleBtn.addEventListener('click', () => {
                const isActive = drawer.classList.toggle('active');
                toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            });
        }
    },

    handleRoute() {
        const rawHash = window.location.hash.replace('#', '') || 'home';
        const [viewName, queryString] = rawHash.split('?');

        this.currentView = viewName;
        this.routeParams = this.parseQueryString(queryString);

        const drawer = document.getElementById('mobile-drawer');
        if (drawer) drawer.classList.remove('active');

        const viewSections = document.querySelectorAll('.view-section');
        viewSections.forEach(section => {
            if (section.id === `view-${viewName}`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
        navLinks.forEach(link => {
            if (link.dataset.view === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.renderViewContent(viewName, this.routeParams);
    },

    parseQueryString(qs) {
        const params = {};
        if (!qs) return params;
        qs.split('&').forEach(pair => {
            const [k, v] = pair.split('=');
            if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
        });
        return params;
    },

    renderViewContent(view, params) {
        switch (view) {
            case 'home':
                HomeViewController.init();
                break;
            case 'jobs':
                JobsViewController.init(params);
                break;
            case 'job-detail':
                JobDetailViewController.init(params.id);
                break;
            case 'categories':
                CategoriesViewController.init();
                break;
            case 'companies':
                CompaniesViewController.init();
                break;
            case 'analysis':
                MarketAnalysisViewController.init();
                break;
            case 'about':
                break;
            case 'contact':
                ContactViewController.init();
                break;
            default:
                window.location.hash = '#home';
        }
    }
};


// ============================================================================
// 3. HOME VIEW CONTROLLER
// ============================================================================

const HomeViewController = {
    async init() {
        const analytics = await JobAPI.getAnalytics();
        const companies = await JobAPI.getCompanies();

        const elJobs = document.getElementById('home-stat-jobs');
        const elComp = document.getElementById('home-stat-companies');
        const elCat = document.getElementById('home-stat-categories');
        const elCoun = document.getElementById('home-stat-countries');

        if (elJobs) elJobs.textContent = analytics.totalJobs;
        if (elComp) elComp.textContent = companies.length;
        if (elCat) elCat.textContent = Object.keys(analytics.categoryCounts).length;
        if (elCoun) elCoun.textContent = Object.keys(analytics.countries).length;

        const total = analytics.totalJobs || 1;
        const remotePct = Math.round((analytics.workModes.Remote / total) * 100);
        const hybridPct = Math.round((analytics.workModes.Hybrid / total) * 100);
        const onsitePct = 100 - remotePct - hybridPct;

        const elRmBar = document.getElementById('home-wm-remote-bar');
        const elHyBar = document.getElementById('home-wm-hybrid-bar');
        const elOsBar = document.getElementById('home-wm-onsite-bar');

        if (elRmBar) elRmBar.style.width = `${remotePct}%`;
        if (elHyBar) elHyBar.style.width = `${hybridPct}%`;
        if (elOsBar) elOsBar.style.width = `${onsitePct}%`;

        const elRmTxt = document.getElementById('home-wm-remote-pct');
        const elHyTxt = document.getElementById('home-wm-hybrid-pct');
        const elOsTxt = document.getElementById('home-wm-onsite-pct');

        if (elRmTxt) elRmTxt.textContent = `${remotePct}%`;
        if (elHyTxt) elHyTxt.textContent = `${hybridPct}%`;
        if (elOsTxt) elOsTxt.textContent = `${onsitePct}%`;

        // Hero Search Form Listener
        const heroForm = document.getElementById('hero-search-form');
        const heroInput = document.getElementById('hero-search-input');
        if (heroForm && !heroForm.dataset.bound) {
            heroForm.dataset.bound = 'true';
            heroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const q = heroInput ? heroInput.value.trim() : '';
                window.location.hash = `#jobs?query=${encodeURIComponent(q)}`;
            });
        }
    }
};


// ============================================================================
// 4. JOBS VIEW CONTROLLER (Search, Filter, Sort, Pagination, Preset Tabs)
// ============================================================================

const JobsViewController = {
    filters: {
        query: '',
        country: '',
        workType: '',
        category: '',
        sort: 'newest',
        page: 1,
        limit: 6
    },

    init(routeParams = {}) {
        if (routeParams.category) this.filters.category = routeParams.category;
        if (routeParams.country) this.filters.country = routeParams.country;
        if (routeParams.query) this.filters.query = routeParams.query;
        if (routeParams.workType) this.filters.workType = routeParams.workType;

        this.filters.page = 1;

        this.bindEvents();
        this.syncInputsWithState();
        this.fetchAndRenderJobs();
    },

    applyQuickPreset(preset) {
        this.filters.query = '';
        this.filters.country = '';
        this.filters.workType = '';
        this.filters.category = '';
        this.filters.sort = 'newest';
        this.filters.page = 1;

        if (preset === 'remote') this.filters.workType = 'Remote';
        if (preset === 'python') this.filters.query = 'Python';
        if (preset === 'data') this.filters.category = 'Data';
        if (preset === 'high-salary') this.filters.sort = 'salary-high';

        // Update active quick tab
        const tabs = document.querySelectorAll('.quick-tab');
        tabs.forEach(t => t.classList.remove('active'));

        this.syncInputsWithState();
        this.fetchAndRenderJobs();
    },

    bindEvents() {
        const searchInput = document.getElementById('jobs-search-input');
        const clearSearchBtn = document.getElementById('jobs-search-clear');
        const countrySelect = document.getElementById('filter-country');
        const workTypeSelect = document.getElementById('filter-work-type');
        const categorySelect = document.getElementById('filter-category');
        const sortSelect = document.getElementById('filter-sort');

        const btnClearAll = document.getElementById('btn-clear-all-filters');
        const btnEmptyClear = document.getElementById('btn-empty-clear-filters');

        if (searchInput && !searchInput.dataset.bound) {
            searchInput.dataset.bound = 'true';
            searchInput.addEventListener('input', (e) => {
                this.filters.query = e.target.value;
                this.filters.page = 1;
                if (clearSearchBtn) clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
                this.fetchAndRenderJobs();
            });
        }

        if (clearSearchBtn && !clearSearchBtn.dataset.bound) {
            clearSearchBtn.dataset.bound = 'true';
            clearSearchBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                this.filters.query = '';
                this.filters.page = 1;
                clearSearchBtn.style.display = 'none';
                this.fetchAndRenderJobs();
            });
        }

        if (countrySelect && !countrySelect.dataset.bound) {
            countrySelect.dataset.bound = 'true';
            countrySelect.addEventListener('change', (e) => {
                this.filters.country = e.target.value;
                this.filters.page = 1;
                this.fetchAndRenderJobs();
            });
        }

        if (workTypeSelect && !workTypeSelect.dataset.bound) {
            workTypeSelect.dataset.bound = 'true';
            workTypeSelect.addEventListener('change', (e) => {
                this.filters.workType = e.target.value;
                this.filters.page = 1;
                this.fetchAndRenderJobs();
            });
        }

        if (categorySelect && !categorySelect.dataset.bound) {
            categorySelect.dataset.bound = 'true';
            categorySelect.addEventListener('change', (e) => {
                this.filters.category = e.target.value;
                this.filters.page = 1;
                this.fetchAndRenderJobs();
            });
        }

        if (sortSelect && !sortSelect.dataset.bound) {
            sortSelect.dataset.bound = 'true';
            sortSelect.addEventListener('change', (e) => {
                this.filters.sort = e.target.value;
                this.filters.page = 1;
                this.fetchAndRenderJobs();
            });
        }

        const clearHandler = () => {
            this.filters.query = '';
            this.filters.country = '';
            this.filters.workType = '';
            this.filters.category = '';
            this.filters.sort = 'newest';
            this.filters.page = 1;
            this.syncInputsWithState();
            this.fetchAndRenderJobs();
        };

        if (btnClearAll && !btnClearAll.dataset.bound) {
            btnClearAll.dataset.bound = 'true';
            btnClearAll.addEventListener('click', clearHandler);
        }
        if (btnEmptyClear && !btnEmptyClear.dataset.bound) {
            btnEmptyClear.dataset.bound = 'true';
            btnEmptyClear.addEventListener('click', clearHandler);
        }
    },

    syncInputsWithState() {
        const searchInput = document.getElementById('jobs-search-input');
        const clearSearchBtn = document.getElementById('jobs-search-clear');
        const countrySelect = document.getElementById('filter-country');
        const workTypeSelect = document.getElementById('filter-work-type');
        const categorySelect = document.getElementById('filter-category');
        const sortSelect = document.getElementById('filter-sort');

        if (searchInput) {
            searchInput.value = this.filters.query;
            if (clearSearchBtn) clearSearchBtn.style.display = this.filters.query ? 'block' : 'none';
        }
        if (countrySelect) countrySelect.value = this.filters.country;
        if (workTypeSelect) workTypeSelect.value = this.filters.workType;
        if (categorySelect) categorySelect.value = this.filters.category;
        if (sortSelect) sortSelect.value = this.filters.sort;
    },

    async fetchAndRenderJobs() {
        const container = document.getElementById('jobs-list-container');
        const countDisplay = document.getElementById('jobs-count-display');
        const emptyState = document.getElementById('jobs-empty-state');
        const pagination = document.getElementById('jobs-pagination');

        if (!container) return;

        this.renderChips();
        let result;
        try {
            result = await JobAPI.getJobs(this.filters);
        } catch (error) {
            container.innerHTML = '<div class="empty-state"><h3>Unable to load jobs</h3><p>The backend API is unavailable.</p></div>';
            if (pagination) pagination.style.display = 'none';
            return;
        }

        if (countDisplay) {
            countDisplay.innerHTML = `Showing <strong>${result.totalItems}</strong> ${result.totalItems === 1 ? 'job' : 'jobs'} found`;
        }

        if (result.totalItems === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            if (pagination) pagination.style.display = 'none';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        container.innerHTML = result.jobs.map(job => this.renderJobCard(job)).join('');
        this.renderPagination(result);
    },

    renderJobCard(job) {
        const workTypeBadgeClass = job.workType === 'Remote' ? 'badge-emerald' : (job.workType === 'Hybrid' ? 'badge-amber' : 'badge-slate');
        const isSaved = SavedJobsStore.isSaved(job.id);
        const saveIcon = isSaved ? '⭐ Saved' : '☆ Save';

        return `
            <article class="job-item-card">
                <div>
                    <div class="job-card-top">
                        <a href="#job-detail?id=${job.id}" class="job-title-link">${escapeHTML(job.title)}</a>
                        <span class="badge ${workTypeBadgeClass}">${job.workType}</span>
                    </div>
                    <div class="job-company">${escapeHTML(job.company)}</div>
                    <div class="job-meta-row">
                        <div class="job-meta-item">
                            <span>📍 ${escapeHTML(job.location)}</span>
                        </div>
                        <div class="job-meta-item">
                            <span>📁 ${escapeHTML(job.category)}</span>
                        </div>
                        <div class="job-meta-item">
                            <span>🕒 ${escapeHTML(job.postedDate)}</span>
                        </div>
                    </div>
                    <div class="job-tags">
                        ${job.skills.map(skill => `<span class="job-tag">${escapeHTML(skill)}</span>`).join('')}
                    </div>
                </div>
                <div class="job-card-actions-bar">
                    <span class="job-source-badge">Source: ${escapeHTML(job.source)}</span>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <button type="button" class="btn-tag-btn" style="background:none; border:none; color:var(--primary); font-size:0.8rem; font-weight:700; cursor:pointer;" onclick="JobsViewController.toggleSaveJob('${job.id}')">${saveIcon}</button>
                        <span class="job-salary-badge">${job.salary ? escapeHTML(job.salary) : 'Salary Unspecified'}</span>
                    </div>
                </div>
            </article>
        `;
    },

    toggleSaveJob(id) {
        SavedJobsStore.toggle(id);
        this.fetchAndRenderJobs();
    },

    renderChips() {
        const chipsBar = document.getElementById('active-chips-bar');
        const chipsContainer = document.getElementById('chips-container');

        if (!chipsBar || !chipsContainer) return;

        const activeChips = [];
        if (this.filters.query) activeChips.push({ key: 'query', label: `Search: "${this.filters.query}"` });
        if (this.filters.country) activeChips.push({ key: 'country', label: `Country: ${this.filters.country}` });
        if (this.filters.workType) activeChips.push({ key: 'workType', label: `Work Type: ${this.filters.workType}` });
        if (this.filters.category) activeChips.push({ key: 'category', label: `Category: ${this.filters.category}` });

        if (activeChips.length === 0) {
            chipsBar.style.display = 'none';
            return;
        }

        chipsBar.style.display = 'flex';
        chipsContainer.innerHTML = activeChips.map(chip => `
            <span class="chip">
                ${escapeHTML(chip.label)}
                <button type="button" class="chip-remove" onclick="JobsViewController.removeChip('${chip.key}')">&times;</button>
            </span>
        `).join('');
    },

    removeChip(key) {
        if (key === 'query') this.filters.query = '';
        if (key === 'country') this.filters.country = '';
        if (key === 'workType') this.filters.workType = '';
        if (key === 'category') this.filters.category = '';

        this.filters.page = 1;
        this.syncInputsWithState();
        this.fetchAndRenderJobs();
    },

    renderPagination(result) {
        const pagination = document.getElementById('jobs-pagination');
        const numbersContainer = document.getElementById('pagination-numbers');
        const btnPrev = document.getElementById('btn-page-prev');
        const btnNext = document.getElementById('btn-page-next');

        if (!pagination || result.totalPages <= 1) {
            if (pagination) pagination.style.display = 'none';
            return;
        }

        pagination.style.display = 'flex';

        if (btnPrev) {
            btnPrev.disabled = result.currentPage === 1;
            btnPrev.onclick = () => {
                if (this.filters.page > 1) {
                    this.filters.page--;
                    this.fetchAndRenderJobs();
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                }
            };
        }

        if (btnNext) {
            btnNext.disabled = result.currentPage === result.totalPages;
            btnNext.onclick = () => {
                if (this.filters.page < result.totalPages) {
                    this.filters.page++;
                    this.fetchAndRenderJobs();
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                }
            };
        }

        if (numbersContainer) {
            let html = '';
            for (let i = 1; i <= result.totalPages; i++) {
                const activeClass = i === result.currentPage ? 'active-page' : '';
                html += `<button type="button" class="btn-page ${activeClass}" onclick="JobsViewController.goToPage(${i})">${i}</button>`;
            }
            numbersContainer.innerHTML = html;
        }
    },

    goToPage(pageNum) {
        this.filters.page = pageNum;
        this.fetchAndRenderJobs();
        window.scrollTo({ top: 300, behavior: 'smooth' });
    }
};


// ============================================================================
// 5. JOB DETAIL VIEW CONTROLLER
// ============================================================================

const JobDetailViewController = {
    async init(jobId) {
        const container = document.getElementById('job-detail-content');
        if (!container) return;

        if (!jobId) {
            container.innerHTML = `<div class="empty-state"><h3>Job Not Found</h3><p>Please select a valid job listing from the jobs database.</p></div>`;
            return;
        }

        const job = await JobAPI.getJobById(jobId);

        if (!job) {
            container.innerHTML = `<div class="empty-state"><h3>Job Not Found</h3><p>The requested job listing could not be located in our dataset.</p></div>`;
            return;
        }

        const workTypeBadgeClass = job.workType === 'Remote' ? 'badge-emerald' : (job.workType === 'Hybrid' ? 'badge-amber' : 'badge-slate');

        container.innerHTML = `
            <header class="detail-header">
                <h1 class="detail-title">${escapeHTML(job.title)}</h1>
                <div class="detail-company">${escapeHTML(job.company)}</div>
                <div class="detail-badges">
                    <span class="badge ${workTypeBadgeClass}">${job.workType}</span>
                    <span class="badge badge-indigo">${escapeHTML(job.category)}</span>
                    <span class="badge badge-slate">Source: ${escapeHTML(job.source)}</span>
                </div>
            </header>

            <div class="detail-grid-meta">
                <div>
                    <div class="meta-box-label">Location</div>
                    <div class="meta-box-value">${escapeHTML(job.location)}</div>
                </div>
                <div>
                    <div class="meta-box-label">Posted Date</div>
                    <div class="meta-box-value">${escapeHTML(job.postedDate)}</div>
                </div>
                <div>
                    <div class="meta-box-label">Listed Salary</div>
                    <div class="meta-box-value">${job.salary ? escapeHTML(job.salary) : 'Unspecified'}</div>
                </div>
                <div>
                    <div class="meta-box-label">Country Region</div>
                    <div class="meta-box-value">${escapeHTML(job.country)}</div>
                </div>
            </div>

            <h3 class="detail-section-title">Job Overview &amp; Description</h3>
            <div class="detail-description">${escapeHTML(job.description)}</div>

            <h3 class="detail-section-title">Required Skills &amp; Stack</h3>
            <div class="job-tags mb-large">
                ${job.skills.map(s => `<span class="job-tag" style="font-size:0.85rem; padding:0.35rem 0.75rem;">${escapeHTML(s)}</span>`).join('')}
            </div>

            <div class="detail-actions">
                <div>
                    <span class="text-muted fs-sm">Original Listing Source: <strong>${escapeHTML(job.source)}</strong></span>
                </div>
                <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                    View Original Posting &nearr;
                </a>
            </div>
        `;
    }
};


// ============================================================================
// 6. CATEGORIES VIEW CONTROLLER
// ============================================================================

const CategoriesViewController = {
    async init() {
        const container = document.getElementById('categories-grid');
        if (!container) return;

        let categories;
        try {
            categories = await JobAPI.getCategories();
        } catch (error) {
            container.innerHTML = '<div class="empty-state"><h3>Unable to load categories</h3><p>The backend API is unavailable.</p></div>';
            return;
        }

        container.innerHTML = categories.map(cat => `
            <div class="category-card" onclick="window.location.hash='#jobs?category=${encodeURIComponent(cat.name)}'" style="cursor:pointer;">
                <div class="category-card-head">
                    <h3 class="category-card-title">${escapeHTML(cat.name)}</h3>
                    <span class="badge badge-primary">${cat.count} ${cat.count === 1 ? 'Job' : 'Jobs'}</span>
                </div>
                <p class="category-card-desc">${escapeHTML(cat.description)}</p>
                <div class="job-tags">
                    ${cat.skills.map(s => `<span class="job-tag">${escapeHTML(s)}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
};


// ============================================================================
// 7. COMPANIES VIEW CONTROLLER
// ============================================================================

const CompaniesViewController = {
    async init() {
        const container = document.getElementById('companies-grid');
        if (!container) return;

        let companies;
        try {
            companies = await JobAPI.getCompanies();
        } catch (error) {
            container.innerHTML = '<div class="empty-state"><h3>Unable to load companies</h3><p>The backend API is unavailable.</p></div>';
            return;
        }

        container.innerHTML = companies.map(comp => `
            <div class="company-card" onclick="window.location.hash='#jobs?query=${encodeURIComponent(comp.name)}'" style="cursor:pointer;">
                <h3 class="company-card-name">${escapeHTML(comp.name)}</h3>
                <div class="company-card-jobs-count">💼 ${comp.jobCount} ${comp.jobCount === 1 ? 'Active Job' : 'Active Jobs'}</div>

                <div class="mb-sm fs-sm text-muted"><strong>Primary Categories:</strong></div>
                <div class="job-tags mb-md">
                    ${comp.categories.map(c => `<span class="job-tag">${escapeHTML(c)}</span>`).join('')}
                </div>

                <div class="fs-sm text-muted">📍 ${comp.locations.join(' · ')}</div>
            </div>
        `).join('');
    }
};


// ============================================================================
// 8. MARKET ANALYSIS VIEW CONTROLLER (Analytics Dashboard Charts)
// ============================================================================

const MarketAnalysisViewController = {
    currentRegionFilter: 'all',

    async init() {
        await this.renderAnalytics();
    },

    async handleRegionChange(region) {
        this.currentRegionFilter = region;
        await this.renderAnalytics();
    },

    async renderAnalytics() {
        let analytics;
        try {
            analytics = await JobAPI.getAnalytics(this.currentRegionFilter);
        } catch (error) {
            ['chart-languages', 'chart-countries', 'chart-workmode-bars', 'chart-workmode-details', 'chart-categories', 'chart-skills', 'chart-time-trend', 'salary-stats-content']
                .forEach(id => {
                    const element = document.getElementById(id);
                    if (element) element.innerHTML = '<div class="empty-state"><p>Analytics are unavailable.</p></div>';
                });
            return;
        }

        this.renderBarChart('chart-languages', analytics.languages, 'fill-indigo');
        this.renderBarChart('chart-countries', analytics.countries, 'fill-emerald');
        this.renderWorkModeAnalytics(analytics.workModes, analytics.totalJobs);
        this.renderBarChart('chart-categories', analytics.categoryCounts, 'fill-purple');
        this.renderSkillsCloud('chart-skills', analytics.skillFrequencies);
        this.renderTimeTrendSVG('chart-time-trend', analytics.timeTrend);
        this.renderSalaryStats('salary-stats-content', analytics.salaryStats);
    },

    renderBarChart(containerId, dataObj, fillClass = 'fill-indigo') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const entries = Object.entries(dataObj).sort((a, b) => b[1] - a[1]);
        const maxVal = Math.max(...entries.map(e => e[1])) || 1;

        container.innerHTML = entries.map(([label, val]) => {
            const pct = Math.round((val / maxVal) * 100);
            return `
                <div class="bar-row">
                    <span class="bar-label" title="${escapeHTML(label)}">${escapeHTML(label)}</span>
                    <div class="bar-track">
                        <div class="bar-fill ${fillClass}" style="width: ${pct}%"></div>
                    </div>
                    <span class="bar-val">${val}</span>
                </div>
            `;
        }).join('');
    },

    renderWorkModeAnalytics(workModes, totalJobs) {
        const barsContainer = document.getElementById('chart-workmode-bars');
        const detailsContainer = document.getElementById('chart-workmode-details');

        if (!barsContainer || !detailsContainer) return;

        const total = totalJobs || 1;
        const remotePct = Math.round((workModes.Remote / total) * 100);
        const hybridPct = Math.round((workModes.Hybrid / total) * 100);
        const onsitePct = 100 - remotePct - hybridPct;

        barsContainer.innerHTML = `
            <div class="work-mode-bar" style="height: 16px;">
                <div class="wm-segment wm-remote" style="width: ${remotePct}%"></div>
                <div class="wm-segment wm-hybrid" style="width: ${hybridPct}%"></div>
                <div class="wm-segment wm-onsite" style="width: ${onsitePct}%"></div>
            </div>
        `;

        detailsContainer.innerHTML = `
            <div class="grid grid-3 gap-md text-center">
                <div class="metric-card" style="padding:1rem;">
                    <div class="metric-label">Remote</div>
                    <div class="metric-value text-emerald" style="font-size:1.5rem;">${remotePct}%</div>
                    <div class="metric-sub">${workModes.Remote} Listings</div>
                </div>
                <div class="metric-card" style="padding:1rem;">
                    <div class="metric-label">Hybrid</div>
                    <div class="metric-value text-amber" style="font-size:1.5rem;">${hybridPct}%</div>
                    <div class="metric-sub">${workModes.Hybrid} Listings</div>
                </div>
                <div class="metric-card" style="padding:1rem;">
                    <div class="metric-label">On-site</div>
                    <div class="metric-value text-muted" style="font-size:1.5rem;">${onsitePct}%</div>
                    <div class="metric-sub">${workModes['On-site']} Listings</div>
                </div>
            </div>
        `;
    },

    renderSkillsCloud(containerId, skillFrequencies) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const sorted = Object.entries(skillFrequencies).sort((a, b) => b[1] - a[1]);

        container.innerHTML = sorted.map(([skill, count]) => `
            <span class="skill-tag-item">
                ${escapeHTML(skill)}
                <span class="skill-tag-count">${count}</span>
            </span>
        `).join('');
    },

    renderTimeTrendSVG(containerId, timeTrend) {
        const container = document.getElementById(containerId);
        if (!container) return;
        if (!timeTrend || timeTrend.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No posting dates are available.</p></div>';
            return;
        }

        const width = 500;
        const height = 200;
        const padding = 30;

        const maxCount = Math.max(...timeTrend.map(t => t.count)) || 1;
        const stepX = (width - padding * 2) / (timeTrend.length - 1);

        const points = timeTrend.map((t, index) => {
            const x = padding + index * stepX;
            const y = height - padding - ((t.count / (maxCount * 1.2)) * (height - padding * 2));
            return { x, y, count: t.count, week: t.week };
        });

        const svgPathD = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');

        container.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
                <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="#f1f5f9" stroke-dasharray="4" stroke-width="1"/>

                <path d="${svgPathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z" fill="rgba(37, 99, 235, 0.08)"/>

                <path d="${svgPathD}" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

                ${points.map(p => `
                    <circle cx="${p.x}" cy="${p.y}" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
                    <text x="${p.x}" y="${p.y - 12}" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">${p.count}</text>
                    <text x="${p.x}" y="${height - 10}" font-size="10" fill="#64748b" text-anchor="middle">${p.week}</text>
                `).join('')}
            </svg>
        `;
    },

    renderSalaryStats(containerId, salaryStats) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (!salaryStats || !salaryStats.hasData) {
            container.innerHTML = `
                <div class="empty-state" style="padding:2rem;">
                    <p class="text-muted">Salary information is not available for enough listings to generate reliable statistics.</p>
                </div>
            `;
            return;
        }

        const currencyEntries = Object.entries(salaryStats.byCurrency || {});
        container.innerHTML = currencyEntries.map(([currency, stats]) => `
            <div class="grid grid-3 gap-md mb-md">
                <div class="metric-card">
                    <div class="metric-label">${escapeHTML(currency)} Average</div>
                    <div class="metric-value text-blue" style="font-size:1.5rem;">${formatSalary(currency, stats.average)}</div>
                    <div class="metric-sub">${stats.count} bounds analyzed</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">${escapeHTML(currency)} Minimum</div>
                    <div class="metric-value text-emerald" style="font-size:1.5rem;">${formatSalary(currency, stats.minimum)}</div>
                    <div class="metric-sub">Lower listing bound</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">${escapeHTML(currency)} Maximum</div>
                    <div class="metric-value text-purple" style="font-size:1.5rem;">${formatSalary(currency, stats.maximum)}</div>
                    <div class="metric-sub">Upper listing bound</div>
                </div>
            </div>
        `).join('');
    }
};

function formatSalary(currency, value) {
    return `${currency} ${Number(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}


// ============================================================================
// 9. CONTACT FORM CONTROLLER
// ============================================================================

const ContactViewController = {
    init() {
        const form = document.getElementById('contact-form');
        const successBanner = document.getElementById('contact-success');

        if (!form || form.dataset.bound) return;
        form.dataset.bound = 'true';

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const subjectInput = document.getElementById('contact-subject');
            const messageInput = document.getElementById('contact-message');

            let isValid = true;
            document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (!subjectInput.value.trim()) {
                subjectInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('has-error');
                isValid = false;
            }

            if (isValid) {
                if (successBanner) successBanner.style.display = 'block';
                form.reset();
                window.scrollTo({ top: 200, behavior: 'smooth' });
            }
        });
    }
};


// Helper Utilities
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    Router.init();
});
