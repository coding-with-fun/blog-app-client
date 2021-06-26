import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";

const PostContent = ({ handlePostDataChange, postData }) => {
    return (
        <div className="post_description">
            <label>Description</label>
            <CKEditor
                editor={ClassicEditor}
                data={postData.description}
                onChange={(event, editor) =>
                    handlePostDataChange(editor.getData(), "description")
                }
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
        </div>
    );
};

export default PostContent;
