import React, { Component } from 'react'
import Note from './Note'
import './css/NoteList.css'

export default class NoteList extends Component {
  // static defaultProps = {
  //   "notes": [
  //     {
  //       "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Dogs",
  //       "modified": "2019-01-03T00:00:00.000Z",
  //       "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
  //     },
  //     {
  //       "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Cats",
  //       "modified": "2018-08-15T23:00:00.000Z",
  //       "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."
  //     },
  //     {
  //       "id": "d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Lions",
  //       "modified": "2018-04-26T23:00:00.000Z",
  //       "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis.\n \rQuis magni quod iusto ipsum laboriosam suscipit excepturi. Dignissimos praesentium eum explicabo recusandae voluptates. Aliquid laboriosam aperiam sapiente aspernatur mollitia tempore deleniti.\n \rDolor ratione nam ut. Ad eum vel. Eos iusto modi praesentium. Nihil eos libero rerum expedita. Corrupti aut exercitationem eveniet sunt."
  //     },
  //     {
  //       "id": "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Monkeys",
  //       "modified": "2018-02-05T00:00:00.000Z",
  //       "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.\n \rQuos recusandae vitae earum minima quidem sapiente repellat. Veniam inventore ut. Ad quibusdam aliquam id in nihil iste qui nobis. Quidem distinctio eos explicabo.\n \rEa enim rerum deleniti quo earum. Provident fugit eum dolore sequi nobis. Architecto molestias odio et doloremque pariatur facere modi. Eum et est blanditiis delectus at est maiores vel velit. Eligendi velit dicta enim omnis."
  //     },
  //     {
  //       "id": "d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Bats",
  //       "modified": "2018-12-01T00:00:00.000Z",
  //       "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet possimus non et mollitia non.\n \rNecessitatibus dolor eaque consectetur ullam quia ad vero. Dolores dolore minus consequatur itaque a corporis sit provident dicta. Ad in tempora ex consequuntur autem accusantium veritatis. Quia a odit qui autem repellendus et perspiciatis harum. Molestias iste at dicta optio vel nulla enim.\n \rAliquid recusandae optio numquam tempora totam voluptatum inventore. Minus ipsum vel officiis consectetur repudiandae unde necessitatibus in. Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid."
  //     },
  //     {
  //       "id": "d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Turtles",
  //       "modified": "2018-09-11T23:00:00.000Z",
  //       "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis.\n \rTempore et vel ut maxime et reprehenderit deleniti esse officia. Laboriosam et reiciendis distinctio qui enim. Amet suscipit sit.\n \rVitae id impedit reprehenderit eveniet nesciunt et soluta. Labore aliquam sed dolores voluptatibus est omnis quo molestias aut. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo."
  //     },
  //     {
  //       "id": "d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "name": "Zebras",
  //       "modified": "2018-08-13T23:00:00.000Z",
  //       "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
  //       "content": "Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam. Odit neque iusto cupiditate iste quam. Fuga itaque aut praesentium ullam saepe ut et vero.\n \rQuisquam doloremque molestiae. Enim rerum dolorem et velit itaque magnam laborum. Aut officiis porro.\n \rQuae eum eaque error. Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit."
  //     }
  //   ]
  // }

  render() {
    let notes = this.props.notes

    if(this.props.selectedNote){
      notes = notes.filter(note => note.id === this.props.selectedNote)

    }else {
    if(this.props.selectedId){

      notes = notes.filter(note => note.folderId === this.props.selectedId)
    }
    else{
      notes = this.props.notes
    }
  }

    return (
      <div className="notelist">
        <div>
          {
            notes.map(note => 
              <Note key={note.id}
              id={note.id}
              name={note.name}
              modified={note.modified}
              folderId={note.folderId}
              content={note.content}
              selectedNote={this.props.selectedNote} />)
            }
        </div>
        {this.props.selectedNote ? <></> : <button>Add Note</button>}
      </div>
    )
  }
}
