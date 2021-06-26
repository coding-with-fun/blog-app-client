import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useRef } from "react";

const PostContent = ({ handlePostDataChange, postData }) => {
    const refDescription = useRef("");

    const handleUserInput = (event, editor) => {
        const data = editor.getData();

        let cleanedData = data.replace(/(<([^>]+)>)/gi, "");
        cleanedData = cleanedData.replace(/&nbsp;/g, " ");

        if (cleanedData.length < 10001) {
            refDescription.current = cleanedData;
            handlePostDataChange(data, "description");
        }
    };

    return (
        <div className="post_description">
            <label>Description</label>
            <CKEditor
                editor={ClassicEditor}
                data={postData.description}
                onChange={handleUserInput}
                config={{
                    toolbar: [
                        "Heading",
                        "|",
                        "Bold",
                        "Italic",
                        "Link",
                        "NumberedList",
                        "BulletedList",
                        "|",
                        "BlockQuote",
                        "Undo",
                        "Redo",
                    ],
                }}
            />
            <div className="d-flex justify-content-between">
                <div
                    id="postDescriptionLengthHelp"
                    className={`form-text text-end pe-1 post_description ${
                        refDescription.current.length < 1 ||
                        refDescription.current.length === 10000
                            ? "warn_text"
                            : ""
                    }`}
                >
                    {refDescription.current.length}/10000
                </div>
                {refDescription.current.length < 100 && (
                    <div
                        id="postDescriptionMessageHelp"
                        className="form-text text-end pe-1 ps-3 warn_text"
                    >
                        Minimum 100 characters are required in post content.
                    </div>
                )}
                {refDescription.current.length > 9999 && (
                    <div
                        id="postDescriptionMessageHelp"
                        className="form-text text-end pe-1 ps-3 warn_text"
                    >
                        You can not add more than 10000 characters in the post.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostContent;
