// Projects component
const Work = () => (
    <section id="work" className="mb-8">
      <header>
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
      </header>
  
      <div className="work-entry mb-4">
        <h3 className="text-xl font-semibold">Associate Consultant, Capgemini, India</h3>
        <p>August 2019 - December 2021</p>
        <ul className="list-disc pl-6">
          <li>2.5 years of experience in Data analysis, Development, and implementation of pipeline for data loading into the warehouse.</li>
          {/* Add more details about your responsibilities and accomplishments */}
        </ul>
  
        <h3 className="text-xl font-semibold mt-4">Project: Warner Bros</h3>
        <p>
          The primary objective of this project is to load data from various sources such as SFTP, S3 Buckets, etc., for Consumer Products applications into Snowflake Data warehouse. We perform various transformations and actions on data as per business requirements. Further, this summarized data is being used for customer insights data, which helps the business understand customer requirements.
        </p>
      </div>
      {/* Add additional work entries as needed */}
    </section>
  );
  
  export default Work;
  