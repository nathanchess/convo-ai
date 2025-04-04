import { TextField } from "@mui/material";

export default function JobForm({ formJobTitle, formEmployerName, formEmployerLocation, formJobDescription,formEmployerDescription, setFormJobTitle, setFormEmployerName, setFormEmployerLocation, setFormJobDescription, setFormEmployerDescription}) {
    return (
        <div className="flex flex-col mx-20 p-6 rounded-md bg-white">

            <h1 className="my-2">Job Title <span className="text-red-500">*</span></h1>
            <TextField value={formJobTitle} onChange={(e) => setFormJobTitle(e.target.value)} placeholder="ex. Software Engineer" />

            <div className="flex flex-row justify-between gap-x-6 mt-3 mb-3">
                <div className="flex flex-col gap-y-2 min-w-[500px]">
                    <h1 className="my-2">Employer Name <span className="text-red-500">*</span></h1>
                    <TextField value={formEmployerName} onChange={(e) => setFormEmployerName(e.target.value)} fullWidth placeholder="ex. John Doe" />
                </div>

                <div className="flex flex-col gap-y-2 min-w-[350px]">
                    <h1 className="my-2">Location <span className="text-red-500">*</span></h1>
                    <TextField  value={formEmployerLocation} onChange={(e) => setFormEmployerLocation(e.target.value)} fullWidth placeholder="ex. Software Engineer" />
                </div>
            </div>

            <h1 className="my-2">Job Description <span className="text-red-500">*</span></h1>
            <textarea value={formJobDescription} onChange={(e) => setFormJobDescription(e.target.value)} className="border-2 h-[300px] resize-none rounded-md p-3 px-4 text-sm">

            </textarea>

            <h1 className="my-2 mt-6">Employer Description <span className="text-red-500">*</span></h1>
            <textarea value={formEmployerDescription} onChange={(e) => setFormEmployerDescription(e.target.value)} className="border-2 h-[300px] resize-none mb-4 rounded-md p-3 px-4 text-sm">

            </textarea>

        </div>
    )
}