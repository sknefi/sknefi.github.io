
import { useState } from "react";
import { certificates } from "@/lib/data";
import { Search, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredCertificates.length));
  };

  const handleShowLess = () => {
    setVisibleCount(8);
  };

  return (
    <section id="certificates" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Certificates</h2>
        
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search certificates..."
            className="pl-10 w-full md:w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No certificates found matching your search.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCertificates
                .slice(0, visibleCount)
                .map((certificate, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      >
                        <div className="h-40 bg-gray-200 overflow-hidden">
                          <img
                            src={certificate.image}
                            alt={certificate.issuer}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-1 text-gray-800 line-clamp-2">
                            {certificate.name}
                          </h3>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {certificate.issuer}
                            </span>
                            <span className="text-xs font-medium bg-portfolio-light-blue text-portfolio-blue px-2 py-1 rounded-full">
                              {certificate.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{certificate.name}</DialogTitle>
                        <DialogDescription>
                          {certificate.issuer} - {certificate.date}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col items-center">
                        <div className="my-4 max-h-96 overflow-hidden">
                          {certificate.link.endsWith('.pdf') ? (
                            <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
                              <embed 
                                src={certificate.link} 
                                type="application/pdf" 
                                className="w-full h-60"
                              />
                            </div>
                          ) : (
                            <img 
                              src={certificate.link} 
                              alt={certificate.name} 
                              className="max-w-full max-h-full object-contain"
                            />
                          )}
                        </div>
                        <a 
                          href={certificate.link}
                          download
                          className="flex items-center gap-2 btn-primary mt-4"
                        >
                          <Download className="h-4 w-4" />
                          Download Certificate
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
            </div>

            {filteredCertificates.length > visibleCount && (
              <div className="flex justify-center mt-8">
                <button 
                  onClick={handleShowMore}
                  className="btn-primary mx-2"
                >
                  Show More
                </button>
              </div>
            )}
            
            {visibleCount > 8 && filteredCertificates.length > 8 && (
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleShowLess}
                  className="btn-outline mx-2"
                >
                  Show Less
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Certificates;
