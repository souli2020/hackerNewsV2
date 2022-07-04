export default function Comment(comment){
    const hasNestComments = comment.comments.length > 0
     return `
      <div class="nested-comments-${comment.level}">
      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${hasNestComments? comment.comments.map(comment => Comment(comment)): ""}
    </div>`
}