import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useRef } from "react";
import { MobileView } from "react-device-detect";

const PostContent = ({ handlePostDataChange, postData }) => {
    const refContent = useRef("");

    const handleUserInput = (event, editor) => {
        const data = editor.getData();

        let cleanedData = data.replace(/(<([^>]+)>)/gi, " ");
        cleanedData = cleanedData.replace(/&nbsp;/g, " ");

        if (cleanedData.length < 10001) {
            refContent.current = cleanedData.trim();
            handlePostDataChange(data, "content");
            handlePostDataChange(cleanedData.trim(), "cleanContent");
        }
    };

    return (
        <div className="post_content">
            <label>Description</label>
            <MobileView>
                <span className="warn_text">
                    * The line should end with proper punctuation to move to
                    next line.
                </span>
            </MobileView>
            <CKEditor
                editor={ClassicEditor}
                data={postData.content}
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
                    id="postContentLengthHelp"
                    className={`form-text text-end pe-1 post_content ${
                        refContent.current.length < 1 ||
                        refContent.current.length === 10000
                            ? "warn_text"
                            : ""
                    }`}
                >
                    {refContent.current.length}/10000
                </div>
                {refContent.current.length < 100 && (
                    <div
                        id="postContentMessageHelp"
                        className="form-text text-end pe-1 ps-3 warn_text"
                    >
                        Minimum 100 characters are required in post content.
                    </div>
                )}
                {refContent.current.length > 9999 && (
                    <div
                        id="postContentMessageHelp"
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
