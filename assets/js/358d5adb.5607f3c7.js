"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8139],{2375:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"backend/personality screening/tasks","title":"Tasks","description":"S3 File Handling","source":"@site/docs/backend/personality screening/tasks.md","sourceDirName":"backend/personality screening","slug":"/backend/personality screening/tasks","permalink":"/hr-documentation/backend/personality screening/tasks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Models","permalink":"/hr-documentation/backend/personality screening/models"},"next":{"title":"Resume Parser","permalink":"/hr-documentation/category/resume-parser"}}');var r=n(4848),d=n(8453);const t={sidebar_position:3},a="Tasks",o={},l=[{value:"<strong>S3 File Handling</strong>",id:"s3-file-handling",level:2},{value:"<code>upload_file_to_s3</code>",id:"upload_file_to_s3",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"<code>download_video_from_s3</code>",id:"download_video_from_s3",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"<strong>Video and Audio Processing</strong>",id:"video-and-audio-processing",level:2},{value:"<code>process_video_and_audio</code>",id:"process_video_and_audio",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"<code>process_video_responses</code>",id:"process_video_responses",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"<code>process_video</code>",id:"process_video",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"<code>summarize_text</code>",id:"summarize_text",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"<code>transcrib</code>",id:"transcrib",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"<code>extract_pitch</code>",id:"extract_pitch",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"<code>extract_pitch_variation</code>",id:"extract_pitch_variation",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"<code>extract_prosody_features</code>",id:"extract_prosody_features",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"<code>extract_hnr</code>",id:"extract_hnr",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"<code>extract_loudness</code>",id:"extract_loudness",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"<code>analyze_speech</code>",id:"analyze_speech",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"<code>get_emotion_counts</code>",id:"get_emotion_counts",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"<strong>Email Notifications</strong>",id:"email-notifications",level:2},{value:"<code>send_personality_screening_emails</code>",id:"send_personality_screening_emails",level:3},{value:"Parameters:",id:"parameters-14",level:4},{value:"<strong>Miscellaneous</strong>",id:"miscellaneous",level:2},{value:"<code>download_video_audio_to_process</code>",id:"download_video_audio_to_process",level:3},{value:"Parameters:",id:"parameters-15",level:4},{value:"<strong>NotificationsConsumer</strong>",id:"notificationsconsumer",level:2},{value:"Methods:",id:"methods",level:3},{value:"<strong>Email Notification System</strong>",id:"email-notification-system",level:2},{value:"<code>generate_email_template</code>",id:"generate_email_template",level:3},{value:"Parameters:",id:"parameters-16",level:4}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"tasks",children:"Tasks"})}),"\n",(0,r.jsx)(i.h2,{id:"s3-file-handling",children:(0,r.jsx)(i.strong,{children:"S3 File Handling"})}),"\n",(0,r.jsx)(i.h3,{id:"upload_file_to_s3",children:(0,r.jsx)(i.code,{children:"upload_file_to_s3"})}),"\n",(0,r.jsx)(i.p,{children:"Reads the file from the local path and uploads it to the specified S3 path. Deletes the local file after successful upload."}),"\n",(0,r.jsx)(i.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"file_path"}),": Local path of the file to upload."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"s3_path"}),": Destination path in the S3 bucket."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"answer_id"}),": ID of the answer associated with the file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"file_type"}),": Type of the file being uploaded."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"download_video_from_s3",children:(0,r.jsx)(i.code,{children:"download_video_from_s3"})}),"\n",(0,r.jsx)(i.p,{children:"Downloads a video file from an S3 bucket to a local temporary directory. Returns the local file path of the downloaded video."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"answer_id"}),": ID of the answer associated with the video."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"object_key"}),": Key (path) of the video file in the S3 bucket."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"video-and-audio-processing",children:(0,r.jsx)(i.strong,{children:"Video and Audio Processing"})}),"\n",(0,r.jsx)(i.h3,{id:"process_video_and_audio",children:(0,r.jsx)(i.code,{children:"process_video_and_audio"})}),"\n",(0,r.jsxs)(i.p,{children:["Triggers the ",(0,r.jsx)(i.code,{children:"process_video_responses"})," function to analyze the video and audio. Cleans up temporary files after processing."]}),"\n",(0,r.jsx)(i.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"video_path"}),": Path to the video file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_path"}),": Path to the audio file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"answer_id"}),": ID of the answer associated with the video and audio."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"screening_id"}),": ID of the screening instance."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"last_answer_id"}),": ID of the last answer in the screening."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"duration"}),": Duration of the video."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"process_video_responses",children:(0,r.jsx)(i.code,{children:"process_video_responses"})}),"\n",(0,r.jsxs)(i.p,{children:["Analyzes the video and audio to extract emotion counts, speech features, and transcript. Saves the analysis results to the ",(0,r.jsx)(i.code,{children:"VideoAnalysis"})," model. Triggers summarization if the current answer is the last one in the screening."]}),"\n",(0,r.jsx)(i.h4,{id:"parameters-3",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"video_path"}),": Path to the video file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_path"}),": Path to the audio file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"answer_id"}),": ID of the answer associated with the video and audio."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"screening_id"}),": ID of the screening instance."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"last_answer_id"}),": ID of the last answer in the screening."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"duration"}),": Duration of the video."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"process_video",children:(0,r.jsx)(i.code,{children:"process_video"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts pitch, loudness, and other speech features from the audio. Generates scores for clarity, logical thinking, articulation, language proficiency, response quality, and technical correctness using GPT. Saves the results to the database."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-4",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"video_path"}),": Path to the video file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_path"}),": Path to the audio file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"answer_id"}),": ID of the answer associated with the video and audio."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"user_id"}),": ID of the user who created the question."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"question"}),": Text of the question."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"can_id"}),": ID of the candidate."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"summarize_text",children:(0,r.jsx)(i.code,{children:"summarize_text"})}),"\n",(0,r.jsxs)(i.p,{children:["Aggregates and summarizes text data from video analysis results. Saves the summarized data to the ",(0,r.jsx)(i.code,{children:"PersonalityScreeningSummary"})," model."]}),"\n",(0,r.jsx)(i.h4,{id:"parameters-5",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"user_id"}),": ID of the user."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"candidate_id"}),": ID of the candidate."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"screening_id"}),": ID of the screening instance."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"org_id"}),": ID of the organization."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"transcrib",children:(0,r.jsx)(i.code,{children:"transcrib"})}),"\n",(0,r.jsx)(i.p,{children:"Transcribes audio to text using the Whisper model and detects the language. Returns the transcription text and detected language."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-6",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_path"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"extract_pitch",children:(0,r.jsx)(i.code,{children:"extract_pitch"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts pitch values from an audio file using both Librosa and Parselmouth (Praat). Returns the average pitch values."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-7",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"extract_pitch_variation",children:(0,r.jsx)(i.code,{children:"extract_pitch_variation"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts pitch variation from an audio file. Measures the variability in pitch using Librosa. Returns the pitch variation."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-8",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"extract_prosody_features",children:(0,r.jsx)(i.code,{children:"extract_prosody_features"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts prosody features from an audio file such as average pitch, pitch variability, intensity, and speech tempo. Returns the extracted features."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-9",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"extract_hnr",children:(0,r.jsx)(i.code,{children:"extract_hnr"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts Harmonic-to-Noise Ratio (HNR) from an audio file using Parselmouth (Praat). Returns the average HNR value."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-10",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"extract_loudness",children:(0,r.jsx)(i.code,{children:"extract_loudness"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts loudness from an audio file. Calculates the root mean square energy (loudness) using Librosa. Returns the average loudness."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-11",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"analyze_speech",children:(0,r.jsx)(i.code,{children:"analyze_speech"})}),"\n",(0,r.jsx)(i.p,{children:"Analyzes speech features from an audio file such as rate of speech, phonation time ratio, articulation rate, and pause durations. Returns the speech features and transcription text."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-12",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"audio_file"}),": Path to the audio file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"text"}),": Transcription text of the audio."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"get_emotion_counts",children:(0,r.jsx)(i.code,{children:"get_emotion_counts"})}),"\n",(0,r.jsx)(i.p,{children:"Extracts emotion counts from a video file. Uses a pre-trained model to detect emotions in the video. Returns the counts of detected emotions."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-13",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"video_path"}),": Path to the video file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"confidence_threshold"}),": Confidence threshold for emotion detection."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"email-notifications",children:(0,r.jsx)(i.strong,{children:"Email Notifications"})}),"\n",(0,r.jsx)(i.h3,{id:"send_personality_screening_emails",children:(0,r.jsx)(i.code,{children:"send_personality_screening_emails"})}),"\n",(0,r.jsx)(i.p,{children:"Sends personality screening emails to candidates with a link to the personality screening. Logs the email sending process and updates candidate stage events."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-14",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"candidates_data"}),": List of candidate data including candidate ID, name, email, job title, etc."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"expired_at"}),": Expiration date of the screening link."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"job_id"}),": ID of the job."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"user_id"}),": ID of the user sending the email."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"screening_id"}),": ID of the screening instance."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"miscellaneous",children:(0,r.jsx)(i.strong,{children:"Miscellaneous"})}),"\n",(0,r.jsx)(i.h3,{id:"download_video_audio_to_process",children:(0,r.jsx)(i.code,{children:"download_video_audio_to_process"})}),"\n",(0,r.jsxs)(i.p,{children:["Downloads video from S3, extracts audio, and triggers further processing. Triggers the ",(0,r.jsx)(i.code,{children:"process_video_and_audio"})," task for further processing."]}),"\n",(0,r.jsx)(i.h4,{id:"parameters-15",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"instance_id"}),": ID of the screening instance."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"notificationsconsumer",children:(0,r.jsx)(i.strong,{children:"NotificationsConsumer"})}),"\n",(0,r.jsx)(i.p,{children:"Handles WebSocket connections for real-time notifications."}),"\n",(0,r.jsx)(i.h3,{id:"methods",children:"Methods:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"connect"})}),": Establishes a WebSocket connection and adds the user to a notification group."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"disconnect"})}),": Removes the user from the notification group upon disconnection."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"receive"})}),": Handles incoming messages and broadcasts them to the group."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"send_notification"})}),": Sends notification messages to the WebSocket client."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"email-notification-system",children:(0,r.jsx)(i.strong,{children:"Email Notification System"})}),"\n",(0,r.jsx)(i.h3,{id:"generate_email_template",children:(0,r.jsx)(i.code,{children:"generate_email_template"})}),"\n",(0,r.jsx)(i.p,{children:"Generates an HTML email template with dynamic placeholders."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-16",children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"job_name"}),": Job title."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"company_logo"}),": URL to the company logo."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"headline"}),": Main heading for the email."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"receiver_name"}),": Recipient's name."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"body"}),": Main email content."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"company_name"}),": Name of the company."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"support_email"}),": Contact email."]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>a});var s=n(6540);const r={},d=s.createContext(r);function t(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);