'use client'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CV() {
  return (
    <div className={`${inter.className} max-w-4xl mx-auto p-8 print:p-0 print:max-w-none bg-gray-50 relative`}>
      <header className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Andrej Srna</h1>
          <div className="text-gray-700 mb-1">ahoj@andrejsrna.sk</div>
          <div className="text-gray-700 mb-1">+420 703623355</div>
          <div className="text-gray-700 mb-1">
            <a
              href="https://andrejsrna.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline"
            >
              andrejsrna.sk
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </div>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/andrejsrna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center"
            >
              GitHub
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrej-srna-937351111/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-700 print:no-underline flex items-center"
            >
              LinkedIn
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </div>
          <h2 className="text-xl text-gray-800 font-medium">
            Full Stack Developer | Web Development & Optimization Specialist | SEO & System Administration
          </h2>
        </div>
        <div className="w-36 h-36 relative overflow-hidden rounded-lg shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] print:shadow-none">
          <img
            src="/Srna.jpg"
            alt="Andrej Srna"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <section className="mb-12 mt-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:mt-0">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Summary</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Experienced Full Stack Developer with a strong focus on web development.
          I am proficient in frontend technologies such as React, Next.js, jQuery, HTML/CSS
          and backend solutions built on PHP.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">SEO</h3>
            <div className="text-gray-600">Website optimization for search engines</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Website Design</h3>
            <div className="text-gray-600">Creating responsive and modern interfaces</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Project Management</h3>
            <div className="text-gray-600">Planning and execution of web projects</div>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">Slovak:</span> Native or Bilingual
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <span className="font-semibold">English:</span> Full Professional
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Frontend</h3>
            <p className="text-gray-600">Creating responsive and interactive UIs using modern frameworks.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Backend</h3>
            <p className="text-gray-600">Development and management of systems in PHP, API integration, working with headless CMS (WordPress, Strapi).</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Web Administration</h3>
            <p className="text-gray-600">SEO optimization, CI/CD deployment, server administration, caching and CDN.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
            <h3 className="font-bold mb-2 text-gray-800">Project Management</h3>
            <p className="text-gray-600">Planning, analysis, technology selection, reporting and communication with stakeholders.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-always">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Work Experience</h2>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
            <span className="text-gray-600 font-medium">February 2025 - April 2025</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">cognito.cz</div>
            <div className="text-gray-600">Brno, South Moravia, Czechia</div>
          </div>
          <p className="text-gray-600">
            3 months of experience as a Frontend Developer at cognito.cz.
          </p>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Web Administration, Development and Application Security Specialist</h3>
            <span className="text-gray-600 font-medium">September 2021 - January 2025</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">Trnava Self-Governing Region</div>
            <div className="text-gray-600">Trnava</div>
          </div>
          <p className="text-gray-600">
            Web Administration, Application Development and Security Specialist responsible for
            the administration and optimization of the Office&apos;s web solutions. Main tasks included
            the development and maintenance of web applications, implementation of security
            measures, improving user experience and optimizing the performance of digital
            services. The work also included SEO optimization, traffic analysis and ensuring
            compliance of web solutions with current legislative and technological standards.
            Cooperation with internal departments and external suppliers in the development and
            integration of new functionalities in order to make the office&apos;s online communication more efficient.
          </p>
        </div>

        <div className="mb-6 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">Full-Stack Web Developer</h3>
            <span className="text-gray-600 font-medium">May 2017 - September 2021</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div className="font-medium text-gray-700">QBSW, as</div>
            <div className="text-gray-600">Bratislava</div>
          </div>
          <p className="text-gray-600">
            Web Developer with a focus on developing and managing web solutions in the
            WordPress environment, including the implementation of modern web
            technologies (HTML, CSS, JavaScript, PHP). Responsible for developing customized
            web applications, optimizing the user experience and ensuring compatibility with
            the latest standards and security requirements. Collaborating with clients to
            design and implement custom web solutions, with an emphasis on performance,
            SEO and responsive design.
          </p>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] print:shadow-none print:page-break-before-always">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Projects</h2>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://www.trnava-vuc.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Trnava Self-Governing Region Website
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Comprehensive redesign of the website for Trnava Self-Governing Region, creating a modern, responsive interface with a focus on user-friendliness and information accessibility.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Technologies Used:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["WordPress", "PHP", "Tailwind CSS", "Responsive Design", "SEO", "Google Analytics", "User Permissions",
              "UX/UI Design", "UX Research", "UX Testing", "CMS", "API", "REST", "Nginx", "MySQL", "jQuery", "AJAX", "Facebook API"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://majetok.trnava.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Trnava City Property Management
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Development of a comprehensive web application for city property management, implementing advanced tools for efficient real estate administration.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Technologies Used:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["WordPress", "PHP", "CSS", "jQuery", "AJAX", "MySQL", "API", "REST", "Nginx", "Tailwind CSS",
              "Facebook API", "CMS", "SEO", "Google Analytics", "User Permissions", "Responsive Design",
              "UX/UI Design", "UX Research", "UX Testing"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-gray-50 rounded-lg p-5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff] print:shadow-none">
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://zdravazupa.trnava-vuc.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline print:text-gray-800 print:no-underline"
            >
              Healthy Region
              <span className="inline-block ml-1 print:hidden">↗</span>
            </a>
          </h3>
          <p className="mb-3 text-gray-600">
            Development of a comprehensive web application for the Healthy Region initiative, implementing advanced tools for efficient management of health service information.
          </p>
          <div className="mb-2 font-semibold text-gray-700">Technologies Used:</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "Tailwind", "Shadcn", "Next.js", "TypeScript", "API", "REST", "NextAuth", "PostgreSQL",
              "Docker", "Router", "Git", "GitHub", "Prisma", "Responsive Design", "SEO", "Cursor",
              "React Lightbox", "Confluence", "Jira"].map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] print:shadow-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media print {
          @page {
            margin: 20mm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          section {
            page-break-inside: avoid;
          }
          .print\\:page-break-before-always {
            page-break-before: always;
          }
          .print\\:page-break-before-auto {
            page-break-before: auto;
          }
        }
      `}</style>
    </div>
  );
}
