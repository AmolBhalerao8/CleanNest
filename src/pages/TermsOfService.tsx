import { useState } from 'react';
import { X } from 'lucide-react';

const TermsOfService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <div className="text-foreground/90 mb-8">Last updated: September 18, 2024</div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-primary hover:text-primary/80 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  Service Agreement
                </button>
              </h2>
              <p className="text-foreground/90">
                By engaging CleanNest for cleaning services, you agree to these terms and conditions. 
                Our services include regular property care, turnover cleaning, and related maintenance 
                services as outlined in your{' '}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-primary hover:text-primary/80 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  service agreement
                </button>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Scheduling and Access</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Service appointments must be scheduled in advance</li>
                <li>Property access must be provided as agreed</li>
                <li>24-hour notice required for cancellations</li>
                <li>Same-day cancellations may incur fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Payment due upon completion of services</li>
                <li>Late payment fees may apply after 30 days</li>
                <li>Recurring services billed monthly</li>
                <li>Price changes require 30-day notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Guarantee</h2>
              <p className="text-foreground/90 mb-4">
                We guarantee our work and will return to address any issues within 24 hours of notification. 
                Our liability is limited to re-cleaning the affected areas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Our liability is limited to the cost of the cleaning service. We carry comprehensive 
                insurance but are not liable for pre-existing damage or items not disclosed prior to service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Property Condition</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Properties must be in reasonable condition for cleaning</li>
                <li>Hazardous conditions must be disclosed</li>
                <li>We reserve the right to refuse service in unsafe conditions</li>
                <li>Additional fees may apply for excessive cleaning requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate service with 30-day written notice. Immediate termination 
                may occur for non-payment, unsafe conditions, or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-foreground/90">
                Questions about these terms should be directed to:
              </p>
              <div className="bg-secondary/30 rounded-lg p-6 mt-4">
                <div>Email: clean.nest.chico@gmail.com</div>
                <div>Phone: (530) 487-1354</div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Service Agreement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-background border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Cleaning Service Agreement</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
              <div className="prose prose-sm max-w-none space-y-6 text-foreground/90">
                <p className="text-lg font-medium">
                  This Cleaning Service Agreement ("Agreement") is entered into as of [Date], by and between:
                </p>
                
                <div className="bg-secondary/30 rounded-lg p-4 space-y-2">
                  <p><strong>Client Name:</strong> _______TBD____________________</p>
                  <p><strong>Service Address:</strong> ______TBD__________________</p>
                  <p><strong>City, State, ZIP:</strong> _______TBD_________________</p>
                  <p><strong>Phone/Email:</strong> __________TBD_________________</p>
                </div>
                
                <p className="font-medium">and</p>
                
                <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                  <p><strong>Cleaning Company Name:</strong> CleanNest LLC (the "Service Provider")</p>
                  <p><strong>Address:</strong> 430 Broadway St.</p>
                  <p><strong>City, State, ZIP:</strong> Chico, CA, 95928</p>
                  <p><strong>Phone/Email:</strong> (530) 487-1354 / Clean.nest.chico@gmail.com</p>
                </div>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">1. Scope of Services</h3>
                  <p>The Service Provider agrees to perform cleaning services as described in the service quote or scope of work provided to the Client. Services may include general cleaning, deep cleaning, move-in/move-out cleaning, or other specified services as agreed upon in writing. Any additional tasks requested during cleaning must be approved in writing before being performed.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">2. Service Schedule</h3>
                  <p>Services will be performed on the following schedule:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>One-time cleaning</li>
                    <li>Recurring (Weekly / Biweekly / Monthly)</li>
                    <li>Other: ____TBD Client_______________</li>
                  </ul>
                  <p><strong>Start Date:</strong> ___TBD Client_________</p>
                  <p><strong>Time:</strong> ____TBD Client________</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">3. Payment Terms</h3>
                  <p>The Client agrees to pay the total amount quoted by the Service Provider. All invoices are due within seven (7) business days of receipt, unless otherwise agreed in writing. Late invoice payments will incur a 10% fee per year on the remaining balance until paid in full. Acceptable payment methods include Venmo (CleanNest official business account), cash, or check.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">4. Quotes & Walkthroughs</h3>
                  <p>Initial quotes are based on information provided by the Client and are valid for seven (7) business days from the date issued. All quotes will be finalized and sent to Client after a walkthrough of the property before services begin. If conditions differ from what was observed during the walkthrough (for example, additional rooms, heavy buildup, pet messes, or debris), the Service Provider reserves the right to adjust the quote to reflect updated conditions. Recurring client quotes may adjust every three (3) months based on variations in property condition, time required, or supply costs.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">5. Clutter and Access</h3>
                  <p>The Service Provider will not clean areas obstructed by clutter (defined as anything that is an easily moveable object which hinders the ability to navigate and clean the Client's home), personal belongings, trash, or hazardous materials. It is the Client's responsibility to ensure reasonable access to all scheduled areas. Areas that cannot be safely or reasonably accessed will be skipped without penalty or refund, and skipped areas will not be rescheduled without an additional fee. Also please note that houses with unrestrained animals will be vacated by cleaners immediately unless the circumstance is communicated beforehand.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">6. Unexpected Circumstances</h3>
                  <p>If unexpected circumstances arise during the cleaning that hinder or delay the process—including but not limited to lack of running water or electricity, pest infestations, excessive buildup beyond typical cleaning conditions, restricted access, or unsafe environments—the Service Provider reserves the right to pause or reschedule the cleaning or apply additional charges to cover lost time, labor, or additional resources required. The Client will be notified promptly in writing of any such issues and associated costs before further work continues.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">7. Damage and Valuables Disclaimer</h3>
                  <p>The Service Provider is not responsible for damage to items that are not properly secured, installed, or stable prior to cleaning (for example, picture frames, shelves, blinds, light fixtures, loose cabinetry, or unanchored furniture). The Client is responsible for safeguarding fragile, valuable, or sentimental items before service begins. CleanNest LLC maintains general liability insurance to cover accidental damage caused by its employees.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">8. Entry, Keys, and Lockouts</h3>
                  <p>If the Client will not be present during the cleaning, access arrangements (for example, key, lockbox, door code, or on-site contact) must be confirmed 24-hours prior to the time of cleaning. If entry cannot be gained at the scheduled time and no prior cancellation notice is given, a lock-out fee equal to fifty percent (50%) of the scheduled service or fifty dollars ($50), whichever is greater, may apply. The Service Provider will secure the property upon completion but is not responsible for property left unlocked or unsecured by the Client.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">9. Health and Safety</h3>
                  <p>The Service Provider reserves the right to refuse or stop service if the property poses a health or safety risk, including but not limited to biohazards, pests, mold accumulation, bodily fluids, or unsafe environments. If such conditions are discovered, cleaning will stop immediately, and a partial charge may apply for time and travel expended. CleanNest reserves the right to cancel future appointments for ongoing unsafe or unsanitary conditions.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">10. Supplies and Equipment</h3>
                  <p>Unless otherwise agreed, the Service Provider will provide all cleaning products and equipment. Use of Client-supplied materials or equipment is at the Client's own risk, and the Service Provider assumes no responsibility for damage or results arising from their use.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">11. Products and Allergies</h3>
                  <p>The Client must disclose any allergies, sensitivities, or cleaning product restrictions before the service begins.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">12. Photography for Quality Assurance</h3>
                  <p>The Service Provider may take before-and-after photos of cleaned areas for internal documentation, quality control, and proof of completion. Photos are stored securely and not shared externally without written consent from the Client.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">13. Cancellation and Rescheduling</h3>
                  <p>Cancellations or rescheduling requests must be made at least twenty-four (24) hours in advance. Cancellations with less than twenty-four (24) hours' notice may be charged fifty percent (50%) of the scheduled service fee or fifty dollars ($50), whichever is greater. If the Service Provider must reschedule, the Client will be notified promptly and offered a new appointment time.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">14. Liability and Insurance</h3>
                  <p>The Service Provider carries general liability insurance and will take reasonable precautions while working on the Client's property. The Client agrees not to hold the Service Provider responsible for normal wear, pre-existing damage, or outcomes due to improper maintenance or product use prior to service. The Client agrees to notify CleanNest LLC in writing within 24 hours of service completion of any alleged loss, damage, or dissatisfaction to allow investigation and remediation. Failure to provide timely notice releases the Service Provider from liability.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">15. Satisfaction Guarantee</h3>
                  <p>If the Client is dissatisfied with the cleaning, they must notify the Service Provider within twenty-four (24) hours of service completion. CleanNest will make reasonable efforts to address concerns promptly, and any re-clean must be scheduled within forty-eight (48) hours of notice.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">16. Non-Solicitation of Staff</h3>
                  <p>The Client agrees not to directly solicit, hire, or employ any CleanNest staff, contractors, or subcontractors for private cleaning services outside of this Agreement for twelve (12) months following the last service date.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">17. Dispute Resolution (Mediation/Arbitration)</h3>
                  <p>The Client and Service Provider agree that any and all disputes, claims, or controversies arising from or relating to this Agreement shall first be addressed through good-faith communication between both parties. If the matter cannot be resolved informally, the parties agree to submit the dispute to non-binding mediation before a neutral mediator located in Butte County, California. The mediator shall be mutually selected, and the costs of mediation shall be shared equally by both parties unless otherwise agreed in writing.</p>
                  <p>If mediation does not resolve the dispute, the matter shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association (AAA). The arbitration shall take place in Butte County, California, before a single neutral arbitrator mutually chosen by both parties. The arbitrator's decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction. Each party shall bear its own legal costs and expenses, unless otherwise awarded by the arbitrator.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">18. Electronic Signatures and Communications</h3>
                  <p>Electronic signatures, emails, and text messages between the parties shall be considered legally binding for purposes of this Agreement.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">19. Termination</h3>
                  <p>Either party may terminate this Agreement with at least seven (7) days' written notice. The Client shall pay for all services rendered up to the termination date.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-foreground">20. Entire Agreement</h3>
                  <p>This Agreement represents the entire understanding between the parties and supersedes all prior discussions or written communications. Any amendments must be made in writing and signed by both parties.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsOfService;