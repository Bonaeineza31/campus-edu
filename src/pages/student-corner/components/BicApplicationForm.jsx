import { useState } from 'react'
import './bic-form.css'

export default function BicApplicationForm({ onClose }) {
  const [step, setStep] = useState(1)
  const totalSteps = 11

  // Handle form submission (mock)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      alert("Application submitted successfully! (Frontend Only)")
      onClose()
    }
  }

  return (
    <div className="bic-modal-overlay" onClick={onClose}>
      <div className="bic-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bic-modal-header">
          <div className="bic-header-text">
            <h2>BIC Application</h2>
            <p>Step {step} of {totalSteps}</p>
          </div>
          <button className="bic-modal-close" onClick={onClose}>×</button>
        </div>

        {/* Progress Bar */}
        <div className="bic-progress-bar">
          <div 
            className="bic-progress-fill" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        {/* Form Body */}
        <form className="bic-modal-body" onSubmit={handleSubmit} id="bicForm">
          
          {step === 1 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 1 — Applicant Information</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Full Name<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Gender<span>*</span></label>
                  <select required>
                    <option value="">Select...</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="bic-form-group">
                  <label>Date of Birth<span>*</span></label>
                  <input type="date" required />
                </div>
                <div className="bic-form-group">
                  <label>Nationality<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>National ID / Passport Number<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Phone Number<span>*</span></label>
                  <input type="tel" placeholder="+250 7XX XXX XXX" required />
                </div>
                <div className="bic-form-group">
                  <label>Emergency Phone Number<span>*</span></label>
                  <input type="tel" required />
                </div>
                <div className="bic-form-group">
                  <label>Email Address<span>*</span></label>
                  <input type="email" required />
                </div>
                <div className="bic-form-group">
                  <label>District<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group full-width">
                  <label>LinkedIn Profile (Optional)</label>
                  <input type="url" placeholder="https://linkedin.com/in/..." />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 2 — Academic Information</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group">
                  <label>University<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Campus<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>College/School<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Department<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Programme of Study<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Current Year of Study<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Student Registration Number<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Expected Graduation Year<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group full-width">
                  <label>Will you participate as:<span>*</span></label>
                  <select required>
                    <option value="">Select...</option>
                    <option>Individual</option>
                    <option>Team</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 3 — Monthly Theme</h3>
              <div className="bic-form-group full-width">
                <p style={{marginBottom: '20px', color: 'var(--text-secondary)'}}>
                  The current theme for this month's challenge is:
                </p>
                <div style={{padding: '20px', background: 'rgba(77, 144, 232, 0.1)', borderRadius: '10px', border: '1px solid #4d90e8'}}>
                  <h4 style={{color: '#4d90e8', margin: 0, fontSize: '1.2rem'}}>Entrepreneurship & Job Creation Opportunities</h4>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 4 — Project Information</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Project Title<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Project Focus Area<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group">
                  <label>Project Stage<span>*</span></label>
                  <select required>
                    <option value="">Select...</option>
                    <option>Idea</option>
                    <option>Validation</option>
                    <option>Prototype</option>
                    <option>MVP</option>
                    <option>Startup</option>
                  </select>
                </div>
                <div className="bic-form-group full-width">
                  <label>Industry<span>*</span></label>
                  <input type="text" required />
                </div>
                <div className="bic-form-group full-width">
                  <label>Project Summary<span>*</span></label>
                  <textarea required></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 5 — Problem & Solution</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>What inspired your project idea?<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Problem Statement<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Target Beneficiaries<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Problem Severity<span>*</span></label>
                  <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '8px'}}>How severe/urgent is this problem for your target beneficiaries?</p>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Solution Description<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Innovation<span>*</span></label>
                  <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '8px'}}>What makes your approach new or different?</p>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Competitive Advantage<span>*</span></label>
                  <textarea required></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 6 — Business Model</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Target Customers<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Approach to reach those customers<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Value Proposition<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Revenue Model<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Competitor Analysis<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Current Progress<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Biggest Challenge<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Next Milestone<span>*</span></label>
                  <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '8px'}}>The next important goal you aim to achieve.</p>
                  <textarea required></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="bic-form-step">
              <h3 className="bic-step-title">Section 7 — Impact & Potential</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Population Size to Benefit<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Social Impact<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Economic Impact<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Job Creation Potential<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Environmental Impact (if applicable)</label>
                  <textarea></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Expansion Potential<span>*</span></label>
                  <select required>
                    <option value="">Select...</option>
                    <option>Local</option>
                    <option>National</option>
                    <option>Regional</option>
                    <option>International</option>
                  </select>
                </div>
                <div className="bic-form-group full-width">
                  <label>Resources Needed<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Biggest Barrier<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>Growth Strategy<span>*</span></label>
                  <textarea required></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 8 && (
            <div className="bic-step">
              <h3 className="bic-step-title">Section 8 — Uploads</h3>
              <p style={{marginBottom: '24px', color: '#666'}}>Please upload your documents below (Max 10MB per file).</p>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Pitch Deck (PPT/PDF)<span>*</span></label>
                  <div className="bic-file-upload">Click to select file</div>
                  <input type="file" required style={{display: 'none'}} />
                </div>
                <div className="bic-form-group">
                  <label>ID or Passport<span>*</span></label>
                  <div className="bic-file-upload">Click to select file</div>
                </div>
                <div className="bic-form-group">
                  <label>Student Card<span>*</span></label>
                  <div className="bic-file-upload">Click to select file</div>
                </div>
                <div className="bic-form-group full-width">
                  <label>Business Plan (Optional)</label>
                  <div className="bic-file-upload">Click to select file</div>
                </div>
                <div className="bic-form-group full-width">
                  <label>Prototype/Product Demo images or Video (Optional)</label>
                  <div className="bic-file-upload">Click to select file</div>
                </div>
                <div className="bic-form-group full-width">
                  <label>Supporting Documents (Optional)</label>
                  <div className="bic-file-upload">Click to select file</div>
                </div>
              </div>
            </div>
          )}

          {step === 9 && (
            <div className="bic-step">
              <h3 className="bic-step-title">Section 9 — Motivation</h3>
              <div className="bic-form-grid">
                <div className="bic-form-group full-width">
                  <label>Why do you want to participate in Student Corner BIC?<span>*</span></label>
                  <textarea required></textarea>
                </div>
                <div className="bic-form-group full-width">
                  <label>What do you expect to gain from this competition?<span>*</span></label>
                  <div className="bic-checkbox-group">
                    <input type="checkbox" id="exp-mentor" />
                    <label htmlFor="exp-mentor">Mentorship</label>
                  </div>
                  <div className="bic-checkbox-group">
                    <input type="checkbox" id="exp-fund" />
                    <label htmlFor="exp-fund">Funding</label>
                  </div>
                  <div className="bic-checkbox-group">
                    <input type="checkbox" id="exp-exp" />
                    <label htmlFor="exp-exp">Exposure</label>
                  </div>
                  <div className="bic-checkbox-group">
                    <input type="checkbox" id="exp-part" />
                    <label htmlFor="exp-part">Partnerships</label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 10 && (
            <div className="bic-step">
              <h3 className="bic-step-title">Section 10 — How did you hear about us?</h3>
              <div className="bic-form-group full-width">
                <label>How did you hear about Student Corner?<span>*</span></label>
                <select required>
                  <option value="">Select...</option>
                  <option>University/College</option>
                  <option>Friend or Classmate</option>
                  <option>Student Club or Organization</option>
                  <option>Campus Ambassador</option>
                  <option>Social Media</option>
                  <option>The Campus EDU</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 11 && (
            <div className="bic-step">
              <h3 className="bic-step-title">Section 11 — Declarations</h3>
              <p style={{marginBottom: '20px', color: '#666'}}>Please read carefully before submitting.</p>
              <div className="bic-form-group full-width">
                <label>I confirm that:<span>*</span></label>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-1" />
                  <label htmlFor="dec-1">I am a registered university student.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-2" />
                  <label htmlFor="dec-2">All information provided is true.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-3" />
                  <label htmlFor="dec-3">I own or have permission to submit this project.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-4" />
                  <label htmlFor="dec-4">I agree to the competition rules.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-5" />
                  <label htmlFor="dec-5">I consent to Student Corner using my submitted information for evaluation.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-6" />
                  <label htmlFor="dec-6">I understand that submission does not guarantee shortlisting.</label>
                </div>
                <div className="bic-checkbox-group">
                  <input type="checkbox" required id="dec-7" />
                  <label htmlFor="dec-7">I agree to attend program activities if selected.</label>
                </div>
              </div>
              <div className="bic-form-group full-width" style={{marginTop: '30px'}}>
                <label>Digital Signature (type your full name)<span>*</span></label>
                <input type="text" required />
              </div>
            </div>
          )}

        </form>

        {/* Footer Navigation */}
        <div className="bic-modal-footer">
          <button 
            className="bic-btn bic-btn-secondary" 
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            style={{ opacity: step === 1 ? 0.5 : 1, cursor: step === 1 ? 'not-allowed' : 'pointer' }}
          >
            ← Previous
          </button>
          
          <button 
            className="bic-btn bic-btn-primary" 
            form="bicForm"
            type="submit"
          >
            {step === totalSteps ? 'Submit Application' : 'Next Step →'}
          </button>
        </div>

      </div>
    </div>
  )
}
