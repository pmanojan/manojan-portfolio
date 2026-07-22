/**
 * PM·OPS — SHIELD Classified Email Template
 * Marvel MCU Theme for Email Provider
 * Placeholders: {{name}}, {{time}}, {{message}}, {{email}}, {{subject}}, {{budget}}
 * Compatible with EmailJS, Resend, Nodemailer, etc.
 * Inline styles only — email client safe
 */

export const MCU_EMAIL_TEMPLATE = `
<div style="margin:0;padding:0;background-color:#050505;font-family:'Share Tech Mono', monospace, system-ui, Arial,sans-serif;">
  <!-- Outer Wrapper with circuit background effect -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#050505; background-image: radial-gradient(ellipse at top, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at bottom, rgba(226,54,54,0.08) 0%, transparent 60%);">
    <tr>
      <td align="center" style="padding:32px 16px;">
        
        <!-- Main Container — Holographic Panel -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:#0A0A14;border:1px solid rgba(0,212,255,0.2);box-shadow:0 0 40px rgba(0,212,255,0.15), inset 0 0 30px rgba(0,212,255,0.03);">
          
          <!-- Top Accent Line — Gradient Red to Blue to Gold -->
          <tr>
            <td style="height:3px;line-height:3px;background: linear-gradient(90deg, #E23636 0%, #00D4FF 50%, #FFD700 100%);">&nbsp;</td>
          </tr>

          <!-- Header — SHIELD / PM·OPS -->
          <tr>
            <td style="padding:20px 24px 16px 24px;background-color:#050510;border-bottom:1px solid rgba(0,212,255,0.15);">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="vertical-align:middle;">
                    <div style="font-family:'Bebas Neue', Impact, sans-serif;font-size:24px;letter-spacing:2px;line-height:1;">
                      <span style="color:#E23636;">PM</span><span style="color:rgba(255,255,255,0.3);">·</span><span style="color:#00D4FF;">OPS</span>
                      <span style="font-family:monospace;font-size:9px;color:#FFD700;letter-spacing:2px;margin-left:12px;vertical-align:middle;border:1px solid rgba(255,215,0,0.2);padding:2px 6px;background:rgba(255,215,0,0.05);">CLEARANCE ALPHA</span>
                    </div>
                    <div style="font-family:monospace;font-size:9px;letter-spacing:2px;color:rgba(0,212,255,0.6);margin-top:6px;">S.H.I.E.L.D. NETWORK DIVISION • SECURE TRANSMISSION • ENCRYPTED</div>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <div style="width:40px;height:40px;border-radius:50%;background:radial-gradient(circle, rgba(0,212,255,0.25) 0%, #0A0A14 70%);border:1.5px solid #00D4FF;box-shadow:0 0 15px rgba(0,212,255,0.5), inset 0 0 10px rgba(0,212,255,0.15);text-align:center;line-height:38px;font-family:'Bebas Neue',sans-serif;font-size:14px;color:white;">PM</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Classification Banner -->
          <tr>
            <td style="padding:12px 24px;background:rgba(226,54,54,0.06);border-bottom:1px solid rgba(226,54,54,0.15);">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-family:monospace;font-size:10px;letter-spacing:2px;color:#E23636;">⚠️ CLASSIFICATION: COMMAND CENTER DISPATCH — INCOMING MISSION REQUEST</td>
                  <td align="right" style="font-family:monospace;font-size:9px;color:rgba(255,255,255,0.3);">REF: ALPHA-{{time}}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro Text -->
          <tr>
            <td style="padding:20px 24px 0 24px;">
              <div style="font-family:monospace;font-size:11px;letter-spacing:1px;color:#00FFD1;">▶ INCOMING TRANSMISSION DECRYPTED • OPERATOR ALERT</div>
              <div style="font-family:system-ui, sans-serif;font-size:13px;color:#C0C0C0;margin-top:8px;line-height:1.5;">A message by <span style="color:#FFD700;font-weight:600;">{{name}}</span> has been received via Command Center. Kindly respond at your earliest convenience. Operator is on standby in Asia/Colombo UTC+05:30.</div>
            </td>
          </tr>

          <!-- YOUR ORIGINAL STRUCTURE — REDESIGNED AS CLASSIFIED DOSSIER -->
          <tr>
            <td style="padding:20px 24px;">
              <div style="border:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.4);padding:0;position:relative;">
                <!-- Top corner brackets -->
                <div style="height:1px;background: linear-gradient(90deg, transparent, #00D4FF, transparent);"></div>
                
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:16px;">
                  <tr>
                    <!-- Avatar — Hex to Circle 3D Reactor Style -->
                    <td style="vertical-align:top;width:64px;padding-right:16px;">
                      <div style="width:56px;height:56px;border-radius:50%;background:radial-gradient(circle at 30% 30%, rgba(0,212,255,0.25), #0A0A14);border:2px solid rgba(0,212,255,0.4);box-shadow:0 0 18px rgba(0,212,255,0.4), inset 0 0 12px rgba(0,212,255,0.15);text-align:center;line-height:52px;font-size:24px;" role="img">👤</div>
                      <div style="font-family:monospace;font-size:8px;color:#00D4FF;text-align:center;margin-top:6px;letter-spacing:1px;">OPERATIVE</div>
                      <div style="font-family:monospace;font-size:7px;color:rgba(255,255,255,0.25);text-align:center;">ID: {{name}}</div>
                    </td>

                    <!-- Content — Dossier Style -->
                    <td style="vertical-align:top;">
                      <div style="font-family:'Rajdhani', system-ui, sans-serif;font-size:17px;font-weight:700;color:#FFFFFF;letter-spacing:0.5px;">{{name}}</div>
                      
                      <div style="margin-top:4px;display:inline-block;padding:2px 8px;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.15);">
                        <span style="font-family:monospace;font-size:11px;color:#00D4FF;">🕐 TRANSMISSION TIME: </span>
                        <span style="font-family:monospace;font-size:11px;color:rgba(255,255,255,0.5);">{{time}}</span>
                      </div>

                      <!-- Extended placeholders (if your provider supports) -->
                      <div style="margin-top:10px;">
                        <div style="font-family:monospace;font-size:10px;letter-spacing:1px;color:rgba(255,215,0,0.6);">— MISSION BRIEFING —</div>
                        <div style="margin-top:8px;padding:14px;background:rgba(10,10,20,0.9);border-left:3px solid #00D4FF;border-top:1px solid rgba(255,255,255,0.05);border-right:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);">
                          <p style="font-family:system-ui, sans-serif;font-size:14px;line-height:1.6;color:#E8E8E8;margin:0;white-space:pre-wrap;">{{message}}</p>
                        </div>
                      </div>

                      <!-- Optional Budget/Subject if available -->
                      <div style="margin-top:12px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding:4px 8px;background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.15);font-family:monospace;font-size:10px;color:#FFD700;margin-right:8px;">SUBJECT: {{subject}}</td>
                            <td style="width:8px;"></td>
                            <td style="padding:4px 8px;background:rgba(0,255,209,0.06);border:1px solid rgba(0,255,209,0.15);font-family:monospace;font-size:10px;color:#00FFD1;">BUDGET: {{budget}} — LKR & $</td>
                          </tr>
                        </table>
                      </div>

                      <!-- Contact CTA -->
                      <div style="margin-top:14px;">
                        <a href="mailto:{{email}}" style="display:inline-block;padding:8px 16px;background:#E23636;color:white;font-family:monospace;font-size:11px;letter-spacing:1px;text-decoration:none;border:1px solid #E23636;box-shadow:0 0 15px rgba(226,54,54,0.3);">↗ REPLY TO {{email}}</a>
                        <span style="font-family:monospace;font-size:9px;color:rgba(255,255,255,0.25);margin-left:10px;">SECURE CHANNEL • RESPONSE WITHIN 24H</span>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Bottom scan line -->
                <div style="height:1px;background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent);"></div>
              </div>
            </td>
          </tr>

          <!-- Footer — Command Center Info -->
          <tr>
            <td style="padding:16px 24px 20px 24px;background:#050505;border-top:1px solid rgba(255,255,255,0.06);">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-family:monospace;font-size:9px;color:rgba(255,255,255,0.25);line-height:1.6;">
                    <span style="color:#00D4FF;">PM·OPS</span> • Pemaraj Manojan • IT Administrator | Network Engineer | Entry Level React Developer<br/>
                    📍 BCAS Campus Jaffna — Jaffna Only + Colombo District, LK • 🕐 Asia/Colombo UTC+05:30 • 📧 manojmanojan1392@gmail.com<br/>
                    <span style="color:#FFD700;">Dual Currency:</span> LKR & $ • ATS Resume from LKR 500 • React Entry from LKR 25K / $75
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="font-family:monospace;font-size:8px;letter-spacing:1px;color:#E23636;border:1px solid rgba(226,54,54,0.2);padding:3px 6px;background:rgba(226,54,54,0.05);">AUTHORIZED PERSONNEL ONLY</div>
                    <div style="font-family:monospace;font-size:7px;color:rgba(255,255,255,0.2);margin-top:6px;text-align:right;">© 2026 PM·OPS • CUSTOM RESTRICTIVE LICENSE<br/>NO SELL • NO CLAIM AS OWN</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom Gradient -->
          <tr>
            <td style="height:2px;background: linear-gradient(90deg, #E23636, #00D4FF, #FFD700);"></td>
          </tr>

        </table>

        <!-- Outside Footer Note -->
        <div style="font-family:monospace;font-size:9px;color:rgba(255,255,255,0.2);margin-top:16px;letter-spacing:1px;">
          STARK INDUSTRIES • SHIELD SECURE EMAIL PROTOCOL v4.7.1 • TRANSMISSION LOGGED • DO NOT DISCLOSE OUTSIDE CLEARANCE ALPHA
        </div>

      </td>
    </tr>
  </table>
</div>
`;

// Simple version for providers that only support {{name}}, {{time}}, {{message}} (original 3 placeholders)
export const MCU_EMAIL_SIMPLE = `
<div style="margin:0;padding:0;background-color:#050505;font-family:system-ui, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:24px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0A0A14;border:1px solid rgba(0,212,255,0.2);box-shadow:0 0 30px rgba(0,212,255,0.15);">
        <tr><td style="height:3px;background:linear-gradient(90deg,#E23636,#00D4FF,#FFD700)"></td></tr>
        <tr>
          <td style="padding:16px 20px;background:#050510;border-bottom:1px solid rgba(0,212,255,0.15);">
            <span style="font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:2px;"><span style="color:#E23636;">PM</span><span style="color:#666;">·</span><span style="color:#00D4FF;">OPS</span></span>
            <span style="font-family:monospace;font-size:9px;color:#FFD700;margin-left:10px;border:1px solid rgba(255,215,0,0.2);padding:2px 6px;">CLEARANCE ALPHA</span>
            <span style="float:right;font-family:monospace;font-size:9px;color:rgba(255,255,255,0.3);">INCOMING DISPATCH</span>
          </td>
        </tr>
        <tr>
          <td style="padding:20px;">
            <div style="color:#00FFD1;font-family:monospace;font-size:11px;">▶ MESSAGE BY {{name}} RECEIVED</div>
            <div style="margin-top:20px;padding:15px 0;border-width:1px 0;border-style:dashed;border-color:rgba(255,255,255,0.1);">
              <table role="presentation"><tr>
                <td style="vertical-align:top;">
                  <div style="padding:10px 14px;margin:0 10px 0 0;background:radial-gradient(circle, rgba(0,212,255,0.2), #0A0A14);border:1px solid rgba(0,212,255,0.3);border-radius:50%;width:44px;height:44px;text-align:center;line-height:44px;font-size:22px;box-shadow:0 0 15px rgba(0,212,255,0.3);" role="img">👤</div>
                </td>
                <td style="vertical-align:top;">
                  <div style="color:#FFFFFF;font-size:16px;font-weight:700;font-family:system-ui;">{{name}}</div>
                  <div style="color:#00D4FF;font-size:12px;font-family:monospace;margin-top:2px;">🕐 {{time}} • Asia/Colombo UTC+05:30</div>
                  <div style="margin-top:12px;padding:12px;background:rgba(0,0,0,0.5);border-left:3px solid #00D4FF;border-top:1px solid rgba(255,255,255,0.05);">
                    <p style="font-size:14px;line-height:1.6;color:#E8E8E8;margin:0;white-space:pre-wrap;">{{message}}</p>
                  </div>
                </td>
              </tr></table>
            </div>
            <div style="margin-top:16px;font-family:monospace;font-size:10px;color:rgba(255,255,255,0.3);">Reply quickly to maintain 24H response SLA • PM·OPS Command Center — BCAS Jaffna Only + Colombo</div>
          </td>
        </tr>
        <tr><td style="height:2px;background:linear-gradient(90deg,#E23636,#00D4FF,#FFD700)"></td></tr>
      </table>
      <div style="font-family:monospace;font-size:8px;color:rgba(255,255,255,0.15);margin-top:12px;">© 2026 PM·OPS • No Sell • No Claim As Own • LKR & $ Pricing</div>
    </td></tr>
  </table>
</div>
`;
