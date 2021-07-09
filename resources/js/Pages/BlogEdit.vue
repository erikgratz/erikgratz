<template>
    <breeze-authenticated-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ headerText }}
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <input hidden :value="formAttrs.id" name="id" id="id" type="hidden">
                            <input hidden :value="formAttrs.user_id" name="user_id" id="user_id" type="hidden">
                            <div class="mb-4">
                                <label class="text-xl text-gray-600">Title <span
                                    class="text-red-500">*</span></label><br>
                                <input type="text" class="border-2 border-gray-300 p-2 w-full" name="title" id="title"
                                       v-model="formAttrs.title" required>
                            </div>

                            <div class="mb-4">
                                <label class="text-l text-gray-600">Subtitle</label><br>
                                <input type="text" class="border-2 border-gray-300 p-2 w-full" name="description"
                                       id="description" placeholder="(Optional)" v-model="formAttrs.subtitle">
                            </div>

                            <div class="mb-8">
                                <label class="text-xl text-gray-600">Post Body <span class="text-red-500">*</span></label><br>
                                <div v-if="editor">
                                    <bubble-menu
                                        class="bubble-menu"
                                        :tippy-options="{ duration: 100 }"
                                        :editor="editor"
                                        v-if="editor"
                                    >
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleBold().run()"
                                                :class="{ 'is-active': editor.isActive('bold') }">
                                            bold
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleItalic().run()"
                                                :class="{ 'is-active': editor.isActive('italic') }">
                                            italic
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleStrike().run()"
                                                :class="{ 'is-active': editor.isActive('strike') }">
                                            strike
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                                            h1
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                                            h2
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                                            h3
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                                            h4
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                                            h5
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                                                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                                            h6
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleCode().run()"
                                                :class="{ 'is-active': editor.isActive('code') }">
                                            code inline
                                        </button>
                                    </bubble-menu>
                                    <floating-menu
                                        class="bubble-menu"
                                        :tippy-options="{ duration: 100, maxWidth: 10000 }"
                                        :editor="editor"
                                        v-if="editor"
                                    >

                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().setParagraph().run()"
                                                :class="{ 'is-active': editor.isActive('paragraph') }">
                                            paragraph
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleBulletList().run()"
                                                :class="{ 'is-active': editor.isActive('bulletList') }">
                                            bullet list
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleOrderedList().run()"
                                                :class="{ 'is-active': editor.isActive('orderedList') }">
                                            ordered list
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleCodeBlock().run()"
                                                :class="{ 'is-active': editor.isActive('codeBlock') }">
                                            code block
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().toggleBlockquote().run()"
                                                :class="{ 'is-active': editor.isActive('blockquote') }">
                                            blockquote
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().setHorizontalRule().run()">
                                            horizontal rule
                                        </button>
                                        <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                                @click="editor.chain().focus().setHardBreak().run()">
                                            hard break
                                        </button>
                                    </floating-menu>
                                    <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                            @click="editor.chain().focus().undo().run()">
                                        undo
                                    </button>
                                    <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                            @click="editor.chain().focus().redo().run()">
                                        redo
                                    </button>
                                    <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                            @click="editor.chain().focus().unsetAllMarks().run()">
                                        clear marks
                                    </button>
                                    <button type="button" class="border border-gray-500 m-1 p-1 bg-gray-50"
                                            @click="editor.chain().focus().clearNodes().run()">
                                        clear nodes
                                    </button>

                                    <editor-content class="border-2 border-gray-300 p-2 w-full" :editor="editor" v-model="formAttrs.body"/>
                                </div>
<!--                                <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none" v-html="formAttrs.body">-->
<!--                                </div>-->
                            </div>

                            <div class="flex p-1">
                                <select class="border-2 border-gray-300 border-r p-2" style="width: 200px" name="action" v-model="formAttrs.is_public">
                                    <option :value="true">Save and Publish</option>
                                    <option :value="false">Save Draft</option>
                                </select>
                                <button type="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </breeze-authenticated-layout>
</template>
<script>

import {Editor, EditorContent, BubbleMenu, FloatingMenu} from '@tiptap/vue-3'
import {defaultExtensions} from '@tiptap/starter-kit'
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated'


export default {
    components: {
        BreezeAuthenticatedLayout,
        EditorContent,
        BubbleMenu,
        FloatingMenu
    },
    props: ['BlogPost', 'mode'],
    data() {
        return {
            // isEditing: this.mode == 'edit',
            // headerText: this.isEditing ? 'Editing Post...' : 'Write a new Masterpiece!',
            // postRoute: !this.isEditing ? '/blog/new' : ('/blog/edit/' + this.BlogPost.id),
            editor: new Editor({
                content: this.BlogPost.body,
                extensions: defaultExtensions(),
                editorProps: {
                    attributes: {
                        class:
                            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none"
                    }
                }
            }),
            formAttrs: {
                id: this.BlogPost.id,
                title: this.BlogPost.title,
                subtitle: this.BlogPost.subtitle,
                body: this.BlogPost.body,
                is_public: this.BlogPost.is_public ?? false,
                user_id: this.$page.props.auth.user.id,
            }
        }
    },
    computed: {
        isEditing() {
            return this.mode === 'edit';
        },
        headerText() {
            return this.isEditing ? 'Editing Post...' : 'Write a new Masterpiece!';
        },
        postRoute() {
            return !this.isEditing ? '/blog/new' : ('/blog/edit/' + this.BlogPost.id);
        }
    },
    methods: {
        submit() {
            this.formAttrs.body = this.editor.getHTML()
            console.log(this.formAttrs.body)
            this.$inertia.post(this.postRoute, this.formAttrs)
        }
    },
    mounted() {
        // this.editor = new Editor({
        //     content: this.formAttrs.body,
        //     extensions: defaultExtensions(),
        //     editorProps: {
        //         attributes: {
        //             class:
        //                 "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none"
        //         }
        //     }
        // })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>
