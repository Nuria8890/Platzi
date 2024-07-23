// Imagina que estás desarrollando una aplicación de música y  necesitas crear una función para manejar una lista de reproducción. Tu función debe eliminar el primer elemento utilizando el método shift(), y luego añadir una nueva canción al principio utilizando unshift(). Debes devolver esa playlist actualizada una vez habiendo eliminado y añadido las canciones.

function managePlaylist (playlist, newSong) {
  playlist.shift();
  playlist.unshift(newSong);
  return playlist;
};

const initialPlaylist = ['cancion-1', 'cancion-2', 'cancion-3']
const newSongToAdd = ['cancion-añadida']

console.log('Initial playlist: ' + initialPlaylist);

const updatedPlaylist = managePlaylist(initialPlaylist,newSongToAdd);

console.log('New song to add: ' + newSongToAdd);
console.log('Updated playlist: ' + updatedPlaylist);

